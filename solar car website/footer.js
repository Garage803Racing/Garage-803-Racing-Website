function renderFooter(){
    return `<img class = "bottomBar" src = "images/bar.jpg">
        <div class = "bottomSection">
            <div class = "column1">
                <img src = "images/logo3.png">
                <hr>
                <p>Garage 803 Racing is the solar car<br>
                racing team for high school students<br>
                in the Mountain View-Los Altos Region
                <br><br>
                Est. 2024</p>
            </div>
            <div class = "column2">
                <h1 style = "margin-top: 0">Menu</h1>
                <p><a href = "index.html">Home</a></p>
                <p><a href = "team-25.html">Team</a></p>
                <p><a href = "sponsors.html">Sponsors</a></p>
                <p><a href = "media.html">Media</a></p>
                <p><a href = "donate.html">Donate</a></p>
                <p><a href = "faq.html">FAQ</a></p>
                <p><a href = "join.html">Join</a></p>
                <p><a href = "contact.html">Contact</a></p>
            </div>
            <div class = "column3">
                <h1 style = "margin-top: 0">Address</h1>
                    <p>Mountain View CA, 94040</p>
            </div>
            <div class = "column4">
                <a href = "https://www.linkedin.com/company/garage-803-racing/about/', '_blank" target = "_blank"><img src = "images/LinkedIn-Logo1-removebg-preview.png"></a>
                <a href = "https://www.youtube.com/@Garage.803.Racing" target = "_blank"><img src = "images/youtube-logo-removebg-preview.png"></a>
                <a href = "https://www.instagram.com/garage803racing/" target = "_blank"><img src = "images/instahram-removebg-preview.png"></a>
                <a href = "https://www.facebook.com/people/Garage-803-Racing/61574178865224/?mibextid=wwXIfr" target = "_blank"><img src = "images/Facebook-Logo.png"></a>
            </div>
        </div>
        <p class = "nonProfitStat">501(c)(3) Non-Profit Organization</p>`;
}
document.getElementById("footer").innerHTML = renderFooter();