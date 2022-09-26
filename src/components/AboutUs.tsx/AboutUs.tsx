import aboutImg from '../../assest/mehrab-zahedbeigi-4g9zXU89en4-unsplash.jpg'

import './AboutUs.css'
const AboutUs = () => {
      
    return (
    <section className='about-us'>
        <h1 className='title-about'>Quienes somos</h1>
        <div className='about-us-container'>
            <h4 className='parr-about'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Justo donec enim diam vulputate ut pharetra sit amet aliquam. Porttitor eget dolor morbi non arcu risus quis. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu. Feugiat in ante metus dictum at. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Sed adipiscing diam donec adipiscing tristique risus. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Nulla facilisi morbi tempus iaculis. Nullam eget felis eget nunc lobortis mattis aliquam. Adipiscing elit duis tristique sollicitudin nibh sit. Sed odio morbi quis commodo odio aenean. Nam at lectus urna duis convallis. Ac orci phasellus egestas tellus rutrum tellus. Adipiscing elit duis tristique sollicitudin. Vitae et leo duis ut diam quam. </h4>
            <img src={aboutImg} alt='about-img' className='img-about'/>
        </div>
        
    </section>
    )
    
}

export default AboutUs