function isFromBellville (registration) {
      if(registration ==="") {
        return "invalid registration"
      }
      return registration.startsWith('CY')
  }
  


module.exports = isFromBellville