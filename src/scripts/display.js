define([], function () {
  'use strict';

  var displayTeams = function(teams, numTeams) {
      var headerText = '';
      var teamsText = '';

      window.console.log(teams);
      for(var i = 0; i < teams.length; i++) {
        if(i === numTeams) {
          headerText += "<th>Draftable</th>";
        } else {
          headerText += "<th>Team " + (i + 1) + "</th>";
        }

        teamsText += '<td>';
        for(var j = 0; j < teams[i].length; j++) {
          teamsText += teams[i][j].id + ': ' + teams[i][j].name + ': ' + teams[i][j].title + '<br>';
        }
        teamsText += '</td>';
      }

      var hNode = document.getElementById("header");
      var tNode = document.getElementById("teams");

      hNode.innerHTML = headerText;
      tNode.innerHTML = teamsText;
  };

  return displayTeams;
});
