$(function () {
    const getAnswers = function (event) {
        event.preventDefault();
  
        user = {
            name: $('#name').val(),
            photo: $('#url').val(),
            scores: [
                $('#q1').val(),
                $('#q2').val(),
                $('#q3').val(),
                $('#q4').val(),
                $('#q5').val(),
                $('#q6').val(),
                $('#q7').val(),
                $('#q8').val(),
                $('#q9').val(),
                $('#q10').val(),
            ]
        };
  
        $.post('/api/employees', user).then(function (res) {
            $('#matchName').text(`${res.name}`);
            $('#matchURL').attr("src", `${res.photo}`);
        });
  
    }
    $('#submit').on('click', getAnswers);
  });