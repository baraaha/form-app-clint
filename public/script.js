
  $(function () {
    //Initialize Select2 Elements
    $('.select2').select2()

    //Initialize Select2 Elements
    $('.select2bs4').select2({
      theme: 'bootstrap4'
    })

    //Datemask dd/mm/yyyy
    $('#datemask').inputmask('dd/mm/yyyy', { 'placeholder': 'dd/mm/yyyy' })
    //Datemask2 mm/dd/yyyy
    $('#datemask2').inputmask('mm/dd/yyyy', { 'placeholder': 'mm/dd/yyyy' })
    //Money Euro
    $('[data-mask]').inputmask()

    //Date picker
    $('#reservationdate').datetimepicker({
        format: 'L'
    });

    //Date and time picker
    $('#reservationdatetime').datetimepicker({ icons: { time: 'far fa-clock' } });

    //Date range picker
    $('#reservation').daterangepicker()
    //Date range picker with time picker
    $('#reservationtime').daterangepicker({
      timePicker: true,
      timePickerIncrement: 30,
      locale: {
        format: 'MM/DD/YYYY hh:mm A'
      }
    })
    //Date range as a button
    $('#daterange-btn').daterangepicker(
      {
        ranges   : {
          'Today'       : [moment(), moment()],
          'Yesterday'   : [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
          'Last 7 Days' : [moment().subtract(6, 'days'), moment()],
          'Last 30 Days': [moment().subtract(29, 'days'), moment()],
          'This Month'  : [moment().startOf('month'), moment().endOf('month')],
          'Last Month'  : [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        },
        startDate: moment().subtract(29, 'days'),
        endDate  : moment()
      },
      function (start, end) {
        $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'))
      }
    )

    //Timepicker
    $('#timepicker').datetimepicker({
      format: 'LT'
    })

    //Bootstrap Duallistbox
    $('.duallistbox').bootstrapDualListbox()

    //Colorpicker
    $('.my-colorpicker1').colorpicker()
    //color picker with addon
    $('.my-colorpicker2').colorpicker()

    $('.my-colorpicker2').on('colorpickerChange', function(event) {
      $('.my-colorpicker2 .fa-square').css('color', event.color.toString());
    })

    $("input[data-bootstrap-switch]").each(function(){
      $(this).bootstrapSwitch('state', $(this).prop('checked'));
    })

  })
  // BS-Stepper Init
  document.addEventListener('DOMContentLoaded', function () {
    window.stepper = new Stepper(document.querySelector('.bs-stepper'))
  })

  // DropzoneJS Demo Code Start
  Dropzone.autoDiscover = false

  // Get the template HTML and remove it from the doumenthe template HTML and remove it from the doument
  var previewNode = document.querySelector("#template")
  previewNode.id = ""
  var previewTemplate = previewNode.parentNode.innerHTML
  previewNode.parentNode.removeChild(previewNode)

  var myDropzone = new Dropzone(document.body, { // Make the whole body a dropzone
    url: "/target-url", // Set the url
    thumbnailWidth: 80,
    thumbnailHeight: 80,
    parallelUploads: 20,
    previewTemplate: previewTemplate,
    autoQueue: false, // Make sure the files aren't queued until manually added
    previewsContainer: "#previews", // Define the container to display the previews
    clickable: ".fileinput-button" // Define the element that should be used as click trigger to select files.
  })

  myDropzone.on("addedfile", function(file) {
    // Hookup the start button
    file.previewElement.querySelector(".start").onclick = function() { myDropzone.enqueueFile(file) }
  })

  // Update the total progress bar
  myDropzone.on("totaluploadprogress", function(progress) {
    document.querySelector("#total-progress .progress-bar").style.width = progress + "%"
  })

  myDropzone.on("sending", function(file) {
    // Show the total progress bar when upload starts
    document.querySelector("#total-progress").style.opacity = "1"
    // And disable the start button
    file.previewElement.querySelector(".start").setAttribute("disabled", "disabled")
  })

  // Hide the total progress bar when nothing's uploading anymore
  myDropzone.on("queuecomplete", function(progress) {
    document.querySelector("#total-progress").style.opacity = "0"
  })

  // Setup the buttons for all transfers
  // The "add files" button doesn't need to be setup because the config
  // `clickable` has already been specified.
  document.querySelector("#actions .start").onclick = function() {
    myDropzone.enqueueFiles(myDropzone.getFilesWithStatus(Dropzone.ADDED))
  }
  document.querySelector("#actions .cancel").onclick = function() {
    myDropzone.removeAllFiles(true)
  }
  // DropzoneJS Demo Code End

  

        // a var ctx é acronimo de context que ao final foi passado como 2d que é nosso grafico
        // e atraves do getElementById localizamos o id passado na tag canvas logo a cima
        var ctx = document.getElementById('meuGrafico1').getContext('2d');

        // Type, Data e options

        var chart = new Chart(ctx, {
            // type é o tipo de grafico que será mostrado, nosso caso é bar de barra ou colunas
            type: 'bar',
            // config dos dados que será mostra
            data: {
                // seria a linha do tempo
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Set', 'Out', 'Nov', 'Dez'],
                // informacoes que vao compor o grafico
                datasets: [{
                        //label = titulo ou rotulo que ficara no top do grafico
                        label: 'المبيعات',
                        // data = são os dados que aqui estao fixos, na sua aplicação deve chegar em um formato especifico "Ex: JSON"
                        data: [5, 10, 45, 7, 20, 30, 45, 38, 35, 75, 50, 20],
                        // config a expessura da borda 
                        borderWidth: 2,
                        // cor da borda
                        borderColor: 'rgba(77,166,253,0.85)',
                        // cor da barra
                        backgroundColor: 'rgba(77,166,253,1)',
                    },
                    // abaixo temos a mesma construção, mas com dados direntes 
                    {
                        label: 'المشتريات',
                        data: [18, 3, 15, 35, 40, 80, 30, 55, 85, 95, 15, 10],
                        borderWidth: 2,
                        borderColor: 'rgba(6,204,6,0.85)',
                        backgroundColor: 'rgba(6,204,6,1)',
                    },
                ]
            },
            // options = seria o cabeçalho, mas tem diversas customizações
            options: {
                // aqui o display do title é true então vai aparecer
                title: {
                    display: false,
                    // tamanho da font
                    fontSize: 40,
                    // texto do nosso titulo
                    text: 'تقرير المخزون'
                }
            }
        });
    </script>
      <script>
    var ctx = document.getElementById("myChart1");

var data = {
    labels: [
        "سماعات راس ",
        "سماعات عادية",
        
        "سماعات راس ",
        "سماعات عادية",
           "لاب توب"
    ],
    datasets: [
        {
            data: [300, 50, 100, 50, 100],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#06cc06",
                "#951342"
            ],
            hoverBackgroundColor: [
                "#FF4394",
                "#36A2EB",
                "#FFCE56",
                 "#06cc06",
                "#951342"
            ]
						
						
        }]
};

var options = { 
	cutoutPercentage:50,
};


var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
});
 
  
 