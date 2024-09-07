import streamlit as st
import pandas as pd

DATA_URL = "https://rolzy-blog-assets.s3.ap-southeast-2.amazonaws.com/Crocodile_Survey_Data_2021_22.xlsx"
DATE_COLUMN = "utc_date"

# Create title
st.title('Crocodile Sightings in the Northern Territory')

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

# Display map of croc sightings
# Create a filter for the sightings
show_filter = st.checkbox('Filter by date', value=False)

if show_filter:
    available_dates = sorted(data[DATE_COLUMN].dt.date.unique())
    day_to_filter = st.selectbox(
            'Select Date', 
            options=available_dates, 
            format_func=lambda x: x.strftime('%Y-%m-%d')
    )
    filtered_data = data[data[DATE_COLUMN].dt.date == day_to_filter]
    st.subheader(f'Map of all sightings on {day_to_filter}')
else:
    filtered_data = data
    st.subheader('Map of all sightings')

st.map(filtered_data)

# Show raw data (optional)
if st.checkbox('Show raw data'):
    st.subheader('Raw data')
    st.write(data)

