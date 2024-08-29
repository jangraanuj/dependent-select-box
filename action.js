
// $(document).ready(function(){
//     $('#manage_user').submit(function(e){
//         e.preventDefault(); // Prevent default form submission
        
//         // Serialize form data
//         var formData = $(this).serialize();
        
//         // Send AJAX request
//         $.ajax({ 
//             url: 'add-users.php',
//             type: 'POST',
//             data: formData,
//             success: function(resp){ 
//                 $('#error_msg').html(resp); // Display response
//             },
//             error: function(xhr, status, error) { 
//                 console.error("Error:", error); // Log any AJAX errors
//             }
//         });
//     });
// });
$(document).ready(function(){
    $('#manage_user').submit(function(e){
        e.preventDefault(); 
        
  
        var formData = $(this).serialize();
     
        $.ajax({ 
            url: 'add-users.php',
            type: 'POST',
            data: formData,
            success: function(resp){ 
                
                Swal.fire({
                    icon: 'success',
                    title: 'Thank you!',
                    html: '<p>Data saved successfully!</p>',
                    showCancelButton: true,
                    confirmButtonText: 'Clear Form',
                    cancelButtonText: 'Continue',
                    reverseButtons: true
                }).then((result) => {
                    if (result.isConfirmed) {
                       
                        $('#manage_user')[0].reset();
                    // } else {
                    //     
                    //     window.location.href = 'update-user.php';
                     }
                });
            },
            error: function(xhr, status, error) { 
            
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'An error occurred while processing your request.'
                });
                console.error("Error:", error); 
            }
            
            
        });
    });
});







