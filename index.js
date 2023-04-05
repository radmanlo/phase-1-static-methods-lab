class Formatter {

  //add static methods here

  static capitalize (str){
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static sanitize ( str){
    return str.replace(/[^- 'A-Za-z]+/g, '')
  }

  static titleize (str){
    const temp = str.split(" ")
    const result = temp.map( (current, index) =>{
      if (index === 0)
        return current.charAt(0).toUpperCase() + current.slice(1)
      if (current !== "a" && current !== 'an' && current !== 'of' && current !== 'and' 
          && current !== 'for' && current !== 'at' && current !== 'by' && current !== 'from' 
          && current !== "the" && current !== 'but')
        return current.charAt(0).toUpperCase() + current.slice(1)
      return current 
    })
    return result.join(" ")
  }

}