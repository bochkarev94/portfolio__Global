const map = () => {
    ymaps.ready(init);

function init () {
    const myMap = new ymaps.Map("map", {
        center:[55.747955568986455,37.627202499999946],
        zoom: 17,
        controls: []
    });
    
            
    let myGeoObjects = [];
    
    myGeoObjects = new ymaps.Placemark([55.747955568986455,37.627202499999946],{
                    },{
                    iconLayout: 'default#image',
                    iconImageHref:'../icons/map.png', 
                    iconImageSize: [51, 63],
                    iconImageOffset: [-55, -35]
    });
                
    const clusterer = new ymaps.Clusterer({
            clusterDisableClickZoom: false,
    });

    
    
    clusterer.add(myGeoObjects);
    myMap.geoObjects.add(clusterer);
    myMap.behaviors.disable('scrollZoom');

    

}

};

export default map;