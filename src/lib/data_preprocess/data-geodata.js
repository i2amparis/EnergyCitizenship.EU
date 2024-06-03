function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
        callback(rawFile.responseText);
      }
    };
    rawFile.send(null);
  }

  function customCode(geodata, pos, code) {
    geodata.features[pos].properties["ISO_A2"] = code;

    let country_arr = excel_dict[code];
    for (let k = 0; k < country_arr.length; k++) {
      Object.entries(country_arr[k]).forEach(([key, value]) => {
        geodata.features[pos].properties[key] = value;
      });
    }
  }

  function ENC_Point() {
    let newgeo = {
      type: "FeatureCollection",
      name: "ENC_Communities",
      features: [],
    };
    var j = 0;

    readTextFile(jsonDataPath, function (text) {
      var comdata = JSON.parse(text);

      readTextFile("../jsons/EU_centroid.geojson", function (text) {
        var geodata = JSON.parse(text);
        readTextFile("../jsons/iso2.json", function (text) {
          var data = JSON.parse(text);

          for (var i = 0; i < comdata.length; i++) {
            const iso_pos = data.findIndex((x) =>
              x["Country"].includes(comdata[i]["Country"].trim())
            );

            if (iso_pos >= 0) {
              let geo_pos = -1;

              if (data[iso_pos]["Alpha-2 code"] == "GR") {
                geo_pos = geodata.features.findIndex(
                  (x) => x.properties["id"] == "EL"
                );
              } else if (data[iso_pos]["Alpha-2 code"] == "GB") {
                geo_pos = geodata.features.findIndex(
                  (x) => x.properties["id"] == "UK"
                );
              } else {
                geo_pos = geodata.features.findIndex(
                  (x) => x.properties["id"] == data[iso_pos]["Alpha-2 code"]
                );
              }

              if (geo_pos >= 0) {
                newgeo.features[j] = {
                  type: "Feature",
                  geometry: geodata.features[geo_pos].geometry,
                  properties: comdata[i],
                };
                j += 1;
              }
            }
          }

          //console.log(newgeo);
        });
      });
    });
  }

  function ENC_Polygon() {
    let newgeo = {
      type: "FeatureCollection",
      name: "ENC_Polygon",
      features: [],
    };
    var j = 0;

    readTextFile(jsonDataPath, function (text) {
      var comdata = JSON.parse(text);

      readTextFile("../jsons/EU.geojson", function (text) {
        var geodata = JSON.parse(text);

        readTextFile("../jsons/iso2.json", function (text) {
          var data = JSON.parse(text);

          for (var i = 0; i < geodata.features.length; i++) {
            //console.log(geodata.features[i])

            const iso_pos = data.findIndex((x) =>
              x["Alpha-3 code"].includes(
                geodata.features[i].properties["ISO_A3"]
              )
            );

            // console.log(geodata.features[i].properties["ISO_A3"])
            //console.log(data[iso_pos])

            if (iso_pos >= 0) {
              let data_pos = -1;
              data_pos = comdata.findIndex((x) =>
                data[iso_pos]["Country"].includes(x["Country"].trim())
              );
              if (data_pos >= 0) {

                newgeo.features[j] = {
                  type: "Feature",
                  geometry: geodata.features[i].geometry,
                  properties: {
                    "Country": comdata[data_pos]["Country"].trim()
                  },
                  "id": j
                };
                j += 1;
              }
            }
          }
        });
      });
    });
  }