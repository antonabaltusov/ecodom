const mapBlock = document.querySelector(".map-block");
type Iadres = {
  adres: string;
  coorditate: [string, string];
  dop: string;
  types: HTMLElement | null;
};
type Iadresses = [
  {
    adresses: Iadres[];
    colorClaster: boolean;
  }
];
const adresses = [] as unknown as Iadresses;
document.querySelectorAll(".map-block__item").forEach((city, id) => {
  const cityItem = {
    colorClaster:
      city.querySelectorAll(".map-block__type:not(.brown)").length >
      city.querySelectorAll(".map-block__type.brown").length,
    adresses: [] as Iadres[],
  };
  city.querySelectorAll("li").forEach((li) => {
    const a = li.querySelector(".map-block__adres");
    cityItem.adresses.push({
      coorditate: JSON.parse(a?.getAttribute("data-map")!),
      adres: a?.textContent!,
      dop: li.querySelector(".map-block__dop")?.textContent!,
      types: li.querySelector(".map-block__types"),
    });
  });
  adresses[id] = cityItem;
});

if (mapBlock) {
  const mobileBoolean =  document.documentElement.clientWidth < 400;
  const centerCoordinate = mobileBoolean ?  [56.66612842030013,53.45914824469841]:[56.75039784124635, 53.05381378684546];
  const maxWidthBalloon = mobileBoolean ? 300: 500;
  const buttons = mapBlock.querySelectorAll(".map-block__buttons button");
  const buttonsToMap = document.querySelectorAll(".smooth-scroll#show-map");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      mapBlock.id = btn.id;
    });
  });
  buttonsToMap.forEach((btn) => {
    btn.addEventListener("click", () => {
      mapBlock.id = btn.id;
    });
  });
  ymaps.ready(init);
  function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: centerCoordinate,
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 9,
      controls: [],
    });

    adresses.forEach((item) => {
      var myGeoObjects = [] as any;

      item.adresses.forEach((item, index) => {
        if (!item.coorditate?.length) {
          return;
        }

        const MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
          `<div class="map-block__info">
          <div>
            <div class="map-block__types">
              ${item.types?.innerHTML}
            </div>
            <div class="map-block__adres">${item.adres}</div>
            <div class="map-block__dop">${item.dop}</div>
          </div>
          <div>
            <div class="map-block__info-time">
              <div>
                <div class="time">с <span>10:00</span> до <span>20:00</span></div>
                <div>Ежедневно, без выходных</div>
              </div>
              <div>
                <div class="pause">Обед: с 14:00 до 15:00</div>
                <div class="pause">Технические перерывы:<br>
                с 11:45 до 12:00 с 16:45 до 17:00
                </div>
              </div>
            </div>
          </div> 
        </div>`
        );
        const defaultImg = "./claster-green.74d65df0.svg"'
        myGeoObjects[index] = new ymaps.Placemark(
          item.coorditate,
          {
            hintContent: item.adres,
          },
          {
            iconLayout: "default#image",
            iconImageHref: defaultImg,
            iconImageSize: [30, 30],
            balloonShadow: true,
            balloonContentLayout: MyBalloonContentLayout,
            balloonPanelMaxMapArea: 0,
            balloonMaxWidth: maxWidthBalloon,
            // Не скрываем иконку при открытом балуне.
            hideIconOnBalloonOpen: false,
            // И дополнительно смещаем балун, для открытия над иконкой.
            balloonOffset: [150, 100],
            balloonPanelMaxMapArea: mobileBoolean ? Infinity : null,
          }
        );
        myGeoObjects[index].events.add("balloonopen", (e) => {

          myGeoObjects[index].options.set({
            iconImageHref: "./claster-grey.95c4eeec.svg",
          });
        });
        myGeoObjects[index].events.add("balloonclose", (e) => {

          myGeoObjects[index].options.set({
            iconImageHref: defaultImg,
          });
        });
      });
      const MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold; font-size:24px;">{{ properties.geoObjects.length }}</div>'
      );
      var myClusterer = new ymaps.Clusterer({
        clusterIcons: [
          {
            href: item.colorClaster
              ? "./claster-green.74d65df0.svg"
              : "./claster-brown.1d7997b4.svg",
            size: [50, 50],
            offset: [-25, -25],
          },
        ],
        clusterNumbers: [1],
        clusterIconContentLayout: MyIconContentLayout,
      });
      myClusterer.add(myGeoObjects);
      myMap.geoObjects.add(myClusterer);
    });
  }
}
