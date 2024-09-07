import streamlit as st

st.set_page_config(
    page_title="Croc Tales Home - Map Explorer", 
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

st.write("")
st.header("Welcome to Croc Tales - Your Gateway to Crocodile Adventures! 🐊")

st.sidebar.success("Start your adventure here:")
st.markdown(
"""
    # Welcome to Croc Tales! 🐊

    Croc Tales is your gateway to exciting crocodile adventures in the Northern Territory.

    ## Explore Our Features
    👈 **Select a map from the sidebar** to discover what Croc Tales can do!

    ## Want to Learn More?
    - 🌐 Visit our website: [croctales.com](https://croc-tales.web.app/)

    ## Discover Crocodile Hotspots
    - 🗺️ [Interactive Map of Crocodile Sightings](https://croctales.com/map)
    - 📊 [Crocodile Population Statistics](https://croctales.com/stats)
"""
)
