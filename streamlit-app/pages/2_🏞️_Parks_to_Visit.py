import folium
import requests
import streamlit as st
import geopandas as gpd

DATA_URL = "https://rolzy-blog-assets.s3.ap-southeast-2.amazonaws.com/geojson.json"
DATE_COLUMN = "utc_date"

# Create title
st.set_page_config(
    page_title="Parks to visit in the Northern Territory",
    page_icon="🏞️",
    layout="wide"
)

# Add custom CSS to set the background color
st.markdown(
    """
    <style>
    .stApp {
        background-color: #E6C9A8;  # A sandy, earthy color reminiscent of the Australian outback
    }
    </style>
    """,
    unsafe_allow_html=True
)

# Create title with custom styling
st.markdown("""
    <h1 style='text-align: center; color: #FF6600; text-shadow: 2px 2px #000000;'>
        Parks to visit in the Northern Territory
    </h1>
    """, unsafe_allow_html=True)

@st.cache_data
def load_data():
    # Download the file
    response = requests.get(DATA_URL)
    response.raise_for_status()  # Raise an exception for bad responses
    
    # Parse the JSON content
    j_file = response.json()

    # Convert GeoJSON to GeoDataFrame
    map_df = gpd.GeoDataFrame.from_features(j_file["features"])

    return j_file, map_df


# Create a text element and let the reader know the data is loading.
data_load_state = st.empty()
data_load_state.text('Loading data...')

data, map_df = load_data()

# Clear the message
data_load_state.empty()

# index geojson
i=1
for feature in data["features"]:
   feature['id'] = str(i).zfill(2)
   i += 1

# Create a Folium map centered on Northern Territory
m = folium.Map(location=[-19.4914, 132.5510], zoom_start=5, tiles='CartoDB positron')

# Add GeoJSON layer to the map
folium.GeoJson(
    data,
    style_function=lambda feature: {
        'fillColor': '#00A000',
        'color': '#005000',
        'weight': 1,
        'fillOpacity': 0.5,
    }
).add_to(m)

# Add park names as markers
park_centers = {}
for idx, row in map_df.iterrows():
    park_name = row['NAME']
    center = row.geometry.centroid
    if park_name not in park_centers:
        park_centers[park_name] = center
    else:
        # If we already have a center for this park, compare distances to the park's overall centroid
        park_centroid = map_df[map_df['NAME'] == park_name].geometry.union_all().centroid
        if center.distance(park_centroid) < park_centers[park_name].distance(park_centroid):
            park_centers[park_name] = center

for park_name, center in park_centers.items():
    folium.Marker(
        location=[center.y, center.x],
        popup=park_name,
        icon=folium.Icon(color='green', icon='info-sign')
    ).add_to(m)

# Display the map in Streamlit
st.components.v1.html(m._repr_html_(), width=800, height=600)

if st.checkbox('Show raw data'):
    st.markdown("<h3 style='color: #FF6600;'>Raw data</h3>", unsafe_allow_html=True)
    st.dataframe(map_df.style.set_properties(**{'background-color': '#FFF3E0', 'color': '#000000'}))
