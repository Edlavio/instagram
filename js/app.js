let screenIndex = 0

function SwitchScreen() {

  const screens = document.querySelectorAll('.screen')

  for (i = 0; i < screens.length; i++) {
    screens[i].style.display = "none"
  }
  
  screenIndex++

  if (screenIndex > screens.length) {
      screenIndex = 1
    }

  screens[screenIndex-1].style.display = "block"
  setTimeout(SwitchScreen, 2500)

}