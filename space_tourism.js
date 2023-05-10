var destination = [
    {
      "name": "Moon",
      "images": {
        "png": "./assets/destination/image-moon.png",
        "webp": "./assets/destination/image-moon.webp"
      },
      "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      "distance": "384,400 km",
      "travel": "3 days"
    },
    {
      "name": "Mars",
      "images": {
        "png": "./assets/destination/image-mars.png",
        "webp": "./assets/destination/image-mars.webp"
      },
      "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      "distance": "225 mil. km",
      "travel": "9 months"
    },
    {
      "name": "Europa",
      "images": {
        "png": "./assets/destination/image-europa.png",
        "webp": "./assets/destination/image-europa.webp"
      },
      "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      "distance": "628 mil. km",
      "travel": "3 years"
    },
    {
      "name": "Titan",
      "images": {
        "png": "./assets/destination/image-titan.png",
        "webp": "./assets/destination/image-titan.webp"
      },
      "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      "distance": "1.6 bil. km",
      "travel": "7 years"
    }
];
var crew = [
  {
    "name": "Douglas Hurley",
    "images": {
      "png": "./assets/crew/image-douglas-hurley.png",
      "webp": "./assets/crew/image-douglas-hurley.webp"
    },
    "role": "Commander",
    "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
  },
  {
    "name": "Mark Shuttleworth",
    "images": {
      "png": "./assets/crew/image-mark-shuttleworth.png",
      "webp": "./assets/crew/image-mark-shuttleworth.webp"
    },
    "role": "Mission Specialist",
    "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
  },
  {
    "name": "Victor Glover",
    "images": {
      "png": "./assets/crew/image-victor-glover.png",
      "webp": "./assets/crew/image-victor-glover.webp"
    },
    "role": "Pilot",
    "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
  },
  {
    "name": "Anousheh Ansari",
    "images": {
      "png": "./assets/crew/image-anousheh-ansari.png",
      "webp": "./assets/crew/image-anousheh-ansari.webp"
    },
    "role": "Flight Engineer",
    "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
  }
];
var technology = [
  {
    "name": "Launch vehicle",
    "images": {
      "portrait": "./assets/technology/image-launch-vehicle-portrait.jpg",
      "landscape": "./assets/technology/image-launch-vehicle-landscape.jpg"
    },
    "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
  },
  {
    "name": "Spaceport",
    "images": {
      "portrait": "./assets/technology/image-spaceport-portrait.jpg",
      "landscape": "./assets/technology/image-spaceport-landscape.jpg"
    },
    "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
  },
  {
    "name": "Space capsule",
    "images": {
      "portrait": "./assets/technology/image-space-capsule-portrait.jpg",
      "landscape": "./assets/technology/image-space-capsule-landscape.jpg"
    },
    "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
  }
];

function setData(a) {
  $("#imgdestin img").attr("src", a.images.png);
  $("#infosdestin h2").text(a.name.toUpperCase());
  $("#infosdestin p").text(a.description);
  $("#distance h3").text(a.distance.toUpperCase());
  $("#travel h3").text(a.travel.toUpperCase());
};
function setMember(a) {
  $("#squadmember h3").text(a.name.toUpperCase());
  $("#squadmember h2").text(a.role.toUpperCase());
  $("#squadmember p").text(a.bio);
  $("#memberpic img").attr("src", a.images.png);
}
function setVehicle(a) {
  $("#space h3").text(a.name.toUpperCase());
  $("#space p").text(a.description);
  $("#spaceimg img").attr("src",a.images.portrait);
}

$(document).ready(function(){
  $("#infosdestin ul li a").click(function(){
    $("#infosdestin ul li a").removeClass("active");
    $(this).addClass("active");
  });
  $("#moon").click(function(event){
    event.preventDefault();
    let data = destination.find(function(elem){
      return elem.name.toLowerCase() === "moon";
    });
    setData(data);
  });
  $("#mars").click(function(event){
    event.preventDefault();
    let data = destination.find(function(elem){
      return elem.name.toLowerCase() === "mars";
    });
    setData(data);
  });
  $("#europa").click(function(event){
    event.preventDefault();
    let data = destination.find(function(elem){
      return elem.name.toLowerCase() === "europa";
    });
    setData(data);
  });
  $("#titan").click(function(event){
    event.preventDefault();
    let data = destination.find(function(elem){
      return elem.name.toLowerCase() === "titan";
    });
    setData(data);
  });

  $("#squadmember li").click(function(){
    $("#squadmember li").removeClass("active");
    $(this).addClass("active");
  });
  $("#commander").click(function(){
    let data = crew.find(function(elem){
      return elem.role.toLowerCase() === "commander";
    });
    setMember(data);
  });
  $("#pilot").click(function(){
    let data = crew.find(function(elem){
      return elem.role.toLowerCase() === "pilot";
    })
    setMember(data);
  });
  $("#specialist").click(function(){
    let data = crew.find(function(elem){
      return elem.role.toLowerCase() === "mission specialist";
    });
    setMember(data);
  });
  $("#engineer").click(function(){
    let data = crew.find(function(elem){
      return elem.role.toLowerCase() === "flight engineer";
    });
    setMember(data);
  });
  $("#space ul li").click(function(){
    $("#space ul li").removeClass("active");
    $(this).addClass("active");
  });
  $("#vehicle").click(function(){
    let data = technology.find(function(elem){
      return elem.name.toLowerCase() === "launch vehicle";
    });
    setVehicle(data);
  });
  $("#spaceport").click(function(){
    let data = technology.find(function(elem){
      return elem.name.toLowerCase() === "spaceport";
    });
    setVehicle(data);
  });
  $("#capsule").click(function(){
    let data = technology.find(function(elem){
      return elem.name.toLowerCase() === "space capsule";
    });
    setVehicle(data);
  });
  $("#vehicletab").click(function(){
    let data = technology.find(function(elem){
      return elem.name.toLowerCase() === "launch vehicle";
    });
    setVehicle(data);
    $("#spaceimg img").attr("src",data.images.landscape);
  });
  $("#spaceporttab").click(function(){
    let data = technology.find(function(elem){
      return elem.name.toLowerCase() === "spaceport";
    });
    setVehicle(data);
    $("#spaceimg img").attr("src",data.images.landscape);
  });
  $("#capsuletab").click(function(){
    let data = technology.find(function(elem){
      return elem.name.toLowerCase() === "space capsule";
    });
    setVehicle(data);
    $("#spaceimg img").attr("src",data.images.landscape);
  });
  $("#open").click(function(){
    $(this).nextAll("ul").css("display","flex");
    $(this).css("display","none");
    $("#close").css("display","block");
  });
  $("#close").click(function(){
    $(this).nextAll("ul").css("display","none");
    $(this).css("display","none");
    $("#open").css("display","block");
  });
});
