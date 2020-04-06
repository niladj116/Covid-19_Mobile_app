//Commented Chart Data
//       google.charts.load('current', {'packages':['geochart'], 'mapsApiKey': KEY});  
//        var chartData;
        var stateDetails;
        var output;
        var updatedTime;    
        var settings = {
                    "async": true,
                    "crossDomain": true,
                    "url": "https://corona-virus-world-and-india-data.p.rapidapi.com/api_india",
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
                        "x-rapidapi-key": URL_KEY
                    }
        };
        var global_settings = {
                    "async": true,
                    "crossDomain": true,
                    "url": "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
                        "x-rapidapi-key": URL_KEY,
                        "content-type": "application/json"
                    }
        };
        window.onload=function () {
            document.addEventListener('deviceready', init, false);
            //init();
        }
        
        function init() {
            getData();
            getWorldData();
        }
        
        
            
        function getData() {
            
            $.ajax(settings).done(function (response) {
                console.log(response);
                output="";
                stateDetails = "";
                //chartData = [];
//                output+="<li> Confirmed Cases : " + response.total_values.confirmed + ",  Deaths : " + response.total_values.deaths + "</li>";
//                output+="</li>";
//active: "2812"
//confirmed: "3127"
//deaths: "86"
//delta: {active: 19, confirmed: 19, deaths: 0, recovered: 0}
//deltaconfirmed: "19"
//deltadeaths: "0"
//deltarecovered: "0"
//lastupdatedtime: "04/04/2020 10:27:24"
//recovered: "229"

                output +=     '<hr>'                
                output += '<span align="center">'
                output +=     '<a align="center" style="color:black;">'
                output +=         '<b>Confirmed</b>'
                output +=     '</a>' 
                output +=     '&nbsp;&nbsp;&nbsp;&nbsp;'
                output +=     '<a align="center" style="color:Orange;">'
                output +=         '<b>Active</b>'
                output +=     '</a>'                
                output +=     '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                output +=     '<a align="center" style="color:Tomato;">'
                output +=         '<b>Deaths</b>'
                output +=     '</a>'
                output +=     '&nbsp;&nbsp;&nbsp;&nbsp;'
                output +=     '<a align="center" style="color:MediumSeaGreen;">'
                output +=         '<b>Recovered</b>'
                output +=     '</a>'
                output += '</span>'                
                output += '<BR/><BR/>'                

                output +=     '&nbsp;&nbsp;'                
                output += '<span align="center">'
                output +=     '<a align="center" style="display: inline-block;border-radius: 3px; color:white;width: 60px;height: 22px; background-color:black;">'
                output +=         '<b>'+new Intl.NumberFormat('en-US', { notation: "compact" }).format(response.total_values.confirmed)+'</b>'
                output +=     '</a>' 
                output +=     '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                output +=     '<a align="center" style="display: inline-block;border-radius: 3px; color:white;width: 60px;height: 22px; background-color:Orange;">'
                output +=         '<b>'+new Intl.NumberFormat('en-US', { notation: "compact" }).format(response.total_values.active) +'</b>'
                output +=     '</a>'                
                output +=     '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                output +=     '<a align="center" style="display: inline-block;border-radius: 3px; color:white;width: 60px;height: 22px; background-color:Tomato;">'
                output +=         '<b>'+new Intl.NumberFormat('en-US', { notation: "compact" }).format(response.total_values.deaths) +'</b>'
                output +=     '</a>'
                output +=     '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                output +=     '<a align="center" style="display: inline-block;border-radius: 3px; color:white;width: 60px;height: 22px; background-color:MediumSeaGreen;">'
                output +=         '<b>'+new Intl.NumberFormat('en-US', { notation: "compact" }).format(response.total_values.recovered)+'</b>'
                output +=     '</a>'
                output += '</span>'
//                output +=     '<hr>'
                 
                $('#summaryDataId').html(output); 
                $('#dateId').html(response.total_values.lastupdatedtime.split(' ')[0]); 

                
                
                
//Commented Chart Data
                //chartData.push(['State', 'Confirmed', 'Deaths']);
                for (var state in response.state_wise) {
                    var item = response.state_wise[state];
                    
                    if(item.state === undefined) continue;

                    //Commented Chart Data
//                        chartData.push([item.state, parseInt(item.confirmed), parseInt(item.deaths)]);
                    
//                        stateDetails += "<tr>";
//                        stateDetails +=    "<td>"+item.state+"</td>";
////                        stateDetails +=    "<td>"+item.active+"</td>";
//                        stateDetails +=    "<td>"+item.confirmed+"</td>";
//                        stateDetails +=    "<td>"+item.deaths+"</td>";
//                        stateDetails +=    "<td>"+item.recovered+"</td>";
//                        stateDetails += "</tr>";
                            

                            
                            stateDetails += '<li ><p style="font-weight: bold; font-size:20px;color:dimgrey;">'+item.state+'</p>'
                            stateDetails += '<span>'
                            
                            stateDetails +=     '<a align="center" style="display: inline-block;border-radius: 3px; color:white;width: 40px;height: 22px; background-color:Orange;">'
                            stateDetails +=         '<b>'+item.active+'</b>'
                            stateDetails +=     '</a>'
                            
                            stateDetails +=     '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                            stateDetails +=     '<a align="center" style="display: inline-block;border-radius: 3px; color:white;width: 40px;height: 22px; background-color:Tomato;">'
                            stateDetails +=         '<b>'+item.deaths+'</b>'
                            stateDetails +=     '</a>'
                    
                            stateDetails +=     '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                            stateDetails +=     '<a align="center" style="display: inline-block;border-radius: 3px; color:white;width: 40px;height: 22px; background-color:MediumSeaGreen;">'
                            stateDetails +=         '<b>'+item.recovered+'</b>'
                            stateDetails +=     '</a>'
                            
                            stateDetails += '</span>'
                            stateDetails += '<span class="ui-li-count">'+item.confirmed+'</span></li>';
                    
                };
//Commented Chart Data               
//                google.charts.setOnLoadCallback(drawVisualization);
                
                $('#listviewId').html(stateDetails);
                try{
                    $('#listviewId').listview('refresh');    
                }catch(err) {err.message}
                
                
//                setTimeout(function() {
//                        getData();                
//                }, 120000);

            });
        }


//Commented Chart Data
//        function drawVisualization() {
//          var data = google.visualization.arrayToDataTable(chartData);
//          var opts = {
//            region: 'IN',
//            displayMode: 'regions',
//            resolution: 'provinces',
//            domain: 'IN',
//            legend: 'none',
//            keepAspectRatio:false,  
//            colorAxis: {colors: ['#fff3ed', '#ff5500']}, 
//            width: 650,
////            height: 500
//              tooltip: {isHtml: true}
//          };
//          var geochart = new google.visualization.GeoChart(document.getElementById('chart-div'));
//          geochart.draw(data, opts);
//        }
//



        function getWorldData() {
//            var summaryObj = {confirmed:0,active:0,deaths:0,recovered:0};
//            alert(summaryObj.confirmed);
            $.ajax(global_settings).done(function (result) {
                var response = JSON.parse(result);
                console.log(response);
//                alert(response.statistic_taken_at)
                output="";
                stateDetails = "";
                
              var summaryObj = response.countries_stat
                                         .reduce(function(acc,currObj) {
                                                    if (!acc.hasOwnProperty("confirmed")) {
                                                      acc["confirmed"] = 0;
                                                    }                                
                                                    acc["confirmed"] += parseInt(currObj.cases);
                                             
                                                    if (!acc.hasOwnProperty("active")) {
                                                      acc["active"] = 0;
                                                    }                                
                                                    acc["active"] += parseInt(currObj.active_cases);
                                             
                                                    if (!acc.hasOwnProperty("deaths")) {
                                                      acc["deaths"] = 0;
                                                    }                                
                                                    acc["deaths"] += parseInt(currObj.deaths);
                                             
                                                    if (!acc.hasOwnProperty("recovered")) {
                                                      acc["recovered"] = 0;
                                                    }                                
                                                    acc["recovered"] += parseInt(currObj.total_recovered);
                                                    
                                                 
                                                    return acc;
                                                    }, {});
                
                
                output +=     '<hr>'                
                output += '<span align="center">'
                output +=     '<a align="center" style="color:black;">'
                output +=         '<b>Confirmed</b>'
                output +=     '</a>' 
                output +=     '&nbsp;&nbsp;&nbsp;&nbsp;'
                output +=     '<a align="center" style="color:Orange;">'
                output +=         '<b>Active</b>'
                output +=     '</a>'                
                output +=     '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                output +=     '<a align="center" style="color:Tomato;">'
                output +=         '<b>Deaths</b>'
                output +=     '</a>'
                output +=     '&nbsp;&nbsp;&nbsp;&nbsp;'
                output +=     '<a align="center" style="color:MediumSeaGreen;">'
                output +=         '<b>Recovered</b>'
                output +=     '</a>'
                output += '</span>'                
                output += '<BR/><BR/>'                

                output +=     '&nbsp;&nbsp;'                
                output += '<span align="center">'
                output +=     '<a align="center" style="display: inline-block;border-radius: 3px; color:white;width: 60px;height: 22px; background-color:black;">'
                output +=         '<b>'+new Intl.NumberFormat('en-US', { notation: "compact" }).format(summaryObj.confirmed)+'</b>'
                output +=     '</a>' 
                output +=     '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                output +=     '<a align="center" style="display: inline-block;border-radius: 3px; color:white;width: 60px;height: 22px; background-color:Orange;">'
                output +=         '<b>'+new Intl.NumberFormat('en-US', { notation: "compact" }).format(summaryObj.active) +'</b>'
                output +=     '</a>'                
                output +=     '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                output +=     '<a align="center" style="display: inline-block;border-radius: 3px; color:white;width: 60px;height: 22px; background-color:Tomato;">'
                output +=         '<b>'+new Intl.NumberFormat('en-US', { notation: "compact" }).format(summaryObj.deaths) +'</b>'
                output +=     '</a>'
                output +=     '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                output +=     '<a align="center" style="display: inline-block;border-radius: 3px; color:white;width: 60px;height: 22px; background-color:MediumSeaGreen;">'
                output +=         '<b>'+new Intl.NumberFormat('en-US', { notation: "compact" }).format(summaryObj.recovered)+'</b>'
                output +=     '</a>'
                output += '</span>'
//                output +=     '<hr>'
                 
                $('#summaryGlobalDataId').html(output); 

                $('#dateId').html(response.statistic_taken_at.split(' ')[0]); 

                
               for (var item of response.countries_stat) {
                            var countryCode = countries
                                            .filter(function(obj){
                                                        
                                                            return (obj.name == item.country_name.toLowerCase());
                                                        
                                                    });
                            var code;
                            if(countryCode[0]===undefined) 
                                code = 'flag';
                            else 
                                code = countryCode[0].code;
                            stateDetails += '<li><p style="font-size:20px;color:dimgrey;"><img src="country/'+code+'.png" width="25px"/>&nbsp;&nbsp;'+item.country_name+'</p>'
                            stateDetails += '<span>'
                            
                            stateDetails +=     '<a align="center" style="display: inline-block;border-radius: 3px; color:white;width: 40px;height: 22px; background-color:Orange;">'
                            stateDetails +=         '<b>'+new Intl.NumberFormat('en-US', { notation: "compact" }).format(parseInt(item.active_cases.replace(',','')))+'</b>'
                            stateDetails +=     '</a>'
                            
                            stateDetails +=     '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                            stateDetails +=     '<a align="center" style="display: inline-block;border-radius: 3px; color:white;width: 40px;height: 22px; background-color:Tomato;">'
                            stateDetails +=         '<b>'+new Intl.NumberFormat('en-US', { notation: "compact" }).format(parseInt(item.deaths.replace(',','')))+'</b>'
                            stateDetails +=     '</a>'
                    
                            stateDetails +=     '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                            stateDetails +=     '<a align="center" style="display: inline-block;border-radius: 3px; color:white;width: 40px;height: 22px; background-color:MediumSeaGreen;">'
                            stateDetails +=         '<b>'+new Intl.NumberFormat('en-US', { notation: "compact" }).format(parseInt(item.total_recovered.replace(',','')))+'</b>'
                            stateDetails +=     '</a>'
                            
                            stateDetails += '</span>'
                    
                            stateDetails += '<span class="ui-li-count">'+new Intl.NumberFormat('en-US', { notation: "compact" }).format(parseInt(item.cases.replace(',','')))+'</span></li>';
                    
                };
                
                $('#listviewGlobalId').html(stateDetails);
                try{
                    $('#listviewGlobalId').listview('refresh');    
                }catch(err) {err.message}
                
                
//                setTimeout(function() {
//                        getData();                
//                }, 120000);

            });
        }