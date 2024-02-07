
const  GetKnobSize =() =>{

    const width = window.innerWidth;
    if (width < 640) {
      // 'sm' breakpoint
      return 200; // smaller size for 'sm'
    } else if (width >= 640 && width < 768) {
      // 'md' breakpoint
      return 400; // medium size for 'md'
    } else {
      return 500; // larger size for 'lg' and above
    }

}

export default GetKnobSize