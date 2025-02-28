const ppi = (width, height, size) => {
    return Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)) / size;
};

const aspect_ratio = (width, height) => {
    const gcd = (a, b) => {
        return b === 0 ? a : gcd(b, a % b);
    };

    const divisor = gcd(width, height);
    return `${width / divisor}:${height / divisor}`;
};

const calculate = _ => {
    
     document.getElementById("result").innerHTML = "";

        const width = parseFloat(document.getElementById("width").value);
        const height = parseFloat(document.getElementById("height").value);
        const size = parseFloat(document.getElementById("size").value);

        if (width && height) {
            let aspect_ratio_result = aspect_ratio(width, height);
            document.getElementById("result").innerHTML += `<span>Aspect Ration: ${aspect_ratio_result}</span>`;
        }

        if (width && height && size) {
            let ppi_result = ppi(width, height, size).toFixed(2);
            document.getElementById("result").innerHTML += `<br><span>PPI: ${ppi_result}</span>`;
        }
};


const inputs = document.getElementsByTagName("input");

for (input of inputs) {
    input.addEventListener("change", calculate);
}

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js").then(() => {
        console.log("Service Worker registered!");
    });
}
