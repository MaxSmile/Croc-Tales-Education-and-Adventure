import streamlit as st
import pandas as pd

DATA_URL = "https://rolzy-blog-assets.s3.ap-southeast-2.amazonaws.com/Crocodile_Survey_Data_2021_22.xlsx"
DATE_COLUMN = "utc_date"

# Create title
st.set_page_config(
    page_title="Crocodile Sightings in the Northern Territory",
    page_icon="🐊",
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
        Crocodile Sightings in the Northern Territory
    </h1>
    """, unsafe_allow_html=True)

@st.cache_data
def load_data(nrows):
    data = pd.read_excel(DATA_URL, nrows=nrows)
    lowercase = lambda x: str(x).lower()
    data.rename(lowercase, axis='columns', inplace=True)
    data.rename({"latitude__": "latitude"}, axis='columns', inplace=True)
    data[DATE_COLUMN] = pd.to_datetime(data[DATE_COLUMN])
    return data

# Create a text element and let the reader know the data is loading.
data_load_state = st.empty()
data_load_state.text('Loading data...')

# Load 100,000 rows of data into the dataframe.
data = load_data(100000)

# Clear the message
data_load_state.empty()

# Extract first date and last date from data
MIN_DATE = data[DATE_COLUMN].min().to_pydatetime()
MAX_DATE = data[DATE_COLUMN].max().to_pydatetime()

# Create a filter for the sightings
st.sidebar.markdown("## Filter Options")
show_filter = st.sidebar.checkbox('Filter by date', value=False)

if show_filter:
    available_dates = sorted(data[DATE_COLUMN].dt.date.unique())
    day_to_filter = st.sidebar.selectbox(
            'Select Date', 
            options=available_dates, 
            format_func=lambda x: x.strftime('%Y-%m-%d')
    )
    filtered_data = data[data[DATE_COLUMN].dt.date == day_to_filter]
    st.markdown(f"<h3 style='color: #FF6600;'>Map of all sightings on {day_to_filter}</h3>", unsafe_allow_html=True)
else:
    filtered_data = data
    st.markdown("<h3 style='color: #FF6600;'>Map of all sightings</h3>", unsafe_allow_html=True)

st.map(filtered_data, use_container_width=True)

if st.checkbox('Show raw data'):
    st.markdown("<h3 style='color: #FF6600;'>Raw data</h3>", unsafe_allow_html=True)
    st.dataframe(data.style.set_properties(**{'background-color': '#FFF3E0', 'color': '#000000'}))

