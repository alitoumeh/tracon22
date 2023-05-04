document.getElementById('btnSubmit').onclick = function(e){
    name = document.getElementById('inName').value
    document.getElementById('hello').innerText = " Hello " + name
		document.getElementById('how are you!').innerText = " Wie geht's! "
  }