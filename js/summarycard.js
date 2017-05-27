bootcards.init({
    offCanvasBackdrop: false,
    offCanvasHideOnMainClick: false,
    enableTabletPortraitMode: false,
    disableRubberBanding: false,
    disableBreakoutSelector: 'a.no-break-out'
});

var financeCharts = function() {
    $("#financesChart").empty();
    Morris.Bar({
        element: 'financesChart',
        data: [
            { years: 0, candidates: 28 },
            { years: 2, candidates: 20 },
            { years: 3, candidates: 44 },
            { years: 4, candidates: 44 },
            { years: 5, candidates: 44 },
            { years: 6, candidates: 4 },
            { years: 7, candidates: 4 },
            { years: 8, candidates: 4 },
            { years: 9, candidates: 4 },
            { years: 10, candidates: 4 },
            { years: 'Other', candidates: 8 }
        ],
        xkey: 'years',
        ykeys: ['candidates'],
        labels: ['#candidates'],
        hideHover: 'auto'
    });
}

var growthCharts = function() {
    $("#growthChart").empty();
    Morris.Bar({
        element: 'growthChart',
        data: [
            { company: 'axelero', candidates: 151 },
            { company: 'Holiday System S.r.l.', candidates: 124 },
            { company: 'CosmoDiMarco', candidates: 106 },
            { company: 'RGI S.p.a.', candidates: 90 },
            { company: 'Enegan S.p.A.', candidates: 56 },
            { company: 'MONITOR STORE SOCIETA&#39; COOPERATIVA', candidates: 43 },
            { company: 'Other', candidates: 576 }
        ],
        xkey: 'company',
        ykeys: ['candidates'],
        labels: ['#candidates'],
        hideHover: 'auto'
    }
  );
      $("#growthChart1").empty();
      Morris.Bar({
          element: 'growthChart1',
          data: [
              { city: 'Milano', candidates: 138 },
              { city: 'Torino', candidates: 82 },
              { city: 'Bologna', candidates: 59 },
              { city: 'Roma', candidates: 47 },
              { city: 'Napoli', candidates: 32 },
              { city: 'Firenze', candidates: 25 },
              { city: 'Other', candidates: 763 }
          ],
          xkey: 'city',
          ykeys: ['candidates'],
          labels: ['#candidates'],
          hideHover: 'auto'
      }
    );
        $("#growthChart2").empty();
        Morris.Bar({
            element: 'growthChart2',
            data: [
                { nation: 'Italia', candidates: 1090 },
                { nation: 'Svizzera', candidates: 14 },
                { nation: 'Azerbaijan', candidates: 4 },
                { company: 'Other', candidates: 38 }
            ],
            xkey: 'nation',
            ykeys: ['candidates'],
            labels: ['#candidates'],
            hideHover: 'auto'
        }
      );
          $("#growthChart3").empty();
          Morris.Bar({
              element: 'growthChart3',
              data: [
                  { month: 7, growth: 9 },
                  { month: 1, growth: 7 },
                  { month: 2, growth: 8 },
                  { month: 3, growth: 2 }
              ],
              xkey: 'month',
              ykeys: ['growth'],
              labels: ['Percentage (%)'],
              hideHover: 'auto'
          }
        );
            $("#growthChart4").empty();
            Morris.Bar({
                element: 'growthChart4',
                data: [
                    { month: 1, growth: 3 },
                    { month: 8, growth: 71 },
                    { month: 2, growth: 8 },
                    { month: 3, growth: 20 }
                ],
                xkey: 'month',
                ykeys: ['growth'],
                labels: ['Percentage (%)'],
                hideHover: 'auto'
            }
          );
}

$(document).ready(function() {
    financeCharts();
    growthCharts();
});
$(window).on('resize', function() {
    financeCharts();
    growthCharts();
});
$(window).on('click', function() {
    financeCharts();
    growthCharts();
});

function comp(nameid) {
    $('.cards').addClass('hidden');
    $(nameid).removeClass('hidden').addClass('visible');
}
