function setup(){
    canvas = createCanvas(380,380)
    background("white")
    synth = window.speechSynthesis;
 }

 function preload(){ 
    classifier = ml5.imageClassifier('DoodleNet');      
    }

    function apagar(){
        background("white")
    }

    function draw(){
        strokeWeight(5)
        stroke (0)
        if(mouseIsPressed){
            line(pmouseX, pmouseY, mouseX, mouseY)
        }

    }

    function classifyCanvas(){
        classifier.classify(canvas,gotResult)

    }

    function gotResult(error,results){
        if(error){
            console.log(error)
        }
        console.log(results)
        document.getElementById("label").innerHTML = "Nome: " + results[0].label
        document.getElementById("confidence").innerHTML = "precisão: " + Math.round(results[0].confidence*100)+"%"

        faleisso = new SpeechSynthesisUtterance(results[0].label);
        synth.speak(feleisso)

    }

    function verificar(){
        classifyCanvas()
    }

    
