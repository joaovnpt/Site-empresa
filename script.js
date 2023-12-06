function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("sidebar-aberta");

  var links = document.getElementsByClassName("alista");

  for (var i = 0; i < links.length; i++) {
    if (sidebar.classList.contains("sidebar-aberta")) {
      links[i].style.display = "block";
    } else {
      links[i].style.display = "none";
    }
  }

}