document.querySelector('.logotoggle').onclick = function() {
    var toggleBox = document.getElementById('toggleBox');
      toggleBox.style.display = (toggleBox.style.display === 'none') ? 'block' : 'none';
	};

        document.querySelector('.magglass').onclick = function() {
            var magglassBox = document.getElementById('magglassBox');
            magglassBox.style.display = (magglassBox.style.display === 'none') ? 'block' : 'none';
		 
        };

        document.querySelector('.destination').onclick = function() {
            var destinationBox = document.getElementById('destinationBox');
            destinationBox.style.display = (destinationBox.style.display === 'none') ? 'block' : 'none';
		 
        };

        document.querySelector('.about').onclick = function() {
            var aboutBox = document.getElementById('aboutBox');
           aboutBox.style.display = (aboutBox.style.display === 'none') ? 'block' : 'none';
		 
        };

 document.querySelector('.inspiration').onclick = function() {
  var inspirationBox = document.getElementById('inspirationBox');
     inspirationBox.style.display = (inspirationBox.style.display === 'none') ? 'block' : 'none';
		 
        };

 document.querySelector('.pricing').onclick = function() {
  var pricingBox = document.getElementById('pricingBox');
    pricingBox.style.display = (pricingBox.style.display === 'none') ? 'block' : 'none';
	 };

  document.getElementById('alertButton').addEventListener('click', showCustomAlert);
   document.getElementById('okButton').addEventListener('click', okFunction);
        document.getElementById('cancelButton').addEventListener('click', cancelFunction);

        function showCustomAlert() {
            document.getElementById('customAlert').style.display = 'flex';
        }

        function okFunction() {
            const isChecked = document.getElementById('customCheckbox').checked;
            console.log('OK clicked. Checkbox is ' + (isChecked ? 'checked' : 'unchecked'));
            closeAlert();
        }

        function cancelFunction() {
            console.log('Cancel clicked');
            closeAlert();
        }

        function closeAlert() {
            document.getElementById('customAlert').style.display = 'none';
        }



