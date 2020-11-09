/*global kakao*/
import React, { useEffect } from 'react'
import styled from "styled-components"
import SearchPlace from './Search'

const {kakao} = window

function Map({searchPlace}) {
    
    useEffect(() =>  {
        let container = document.getElementById('map');
        let options = {
                center: new kakao.maps.LatLng(36.332326, 127.434168),
	            level: 5 
        }
        const map = new kakao.maps.Map(container, options)
        const ps = new kakao.maps.services.Places(); 
        
        ps.keywordSearch(searchPlace, placesSearchCB); 
        

        function placesSearchCB (data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {

                let bounds = new kakao.maps.LatLngBounds()
                for (let i=0; i<data.length; i++) {
                    displayMarker(data[i]);    
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                }       
                map.setBounds(bounds)
            }
        }

        function displayMarker(place) {
            // let markerimg = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"
            let marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(place.y, place.x), 
                // image : markerimg
            });

            kakao.maps.event.addListener(marker, 'click', function() {
                // 마커를 클릭하면 장소명이 인포윈도우에 표출
                let infowindow = new kakao.maps.InfoWindow();
                infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
                infowindow.open(map, marker);
            });
        }
        
    }, [searchPlace] )
    
    return(
        <div>
            <Mapcontents id={'map'}></Mapcontents>
        </div>
    )

}

const Mapcontents = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default Map;
