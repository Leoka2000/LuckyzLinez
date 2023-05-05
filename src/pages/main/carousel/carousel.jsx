import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './carousel.css'

const TextCarousel = () => {
  const items = [
    
    {id: 1,name: 'Ali Dyck', comment: 'Very chill environment! super nice guy, will accommodate for anything! 10/10 would go again!' },
    {id: 2,name: 'Tyler Brown',comment: "Gave base design told to go nuts with the rest. turned out great!"},
    {id: 3, name: 'Tam Tamz', comment: 'My daughter went in today beeautiful work can not wait for my neeext one now. thank you so much'},
    {id: 4, name: 'Førever MT',comment: 'Ink is done I love it my sons name !!!'},
    {id: 5,name: 'Robb Lauurie', comment: 'Shoutout to Luckyz Linez for putting in the work for this piece, absolutely thrilled with how it turned out. I can’t thank you enough'},
    {id: 6, name: 'Makiala Patterson',comment: 'Went there for the first time in October because i seen they accepted walk-ins and left with one of my now fav tattoos so far. @luckyz_linez_ - (instagram) was my artist and i don’t think i could have anyone else do tattoos on me again besides him lol. Super chill environment and the friendly staff there made it one of the most pleasant tattoo experiences i’ve had thus far!  :) 10/10 recommend'} ,
    {id: 7,name: 'Afrika Smalldenbrok',comment: 'Got a tatto done by Luciano, he was great!! Very kind and professional guy!! It was my first tattoo and he was sure to be as gentle as he could, to help with the pain. I definitely recommend getting a tattoo here!'}  ,
    {id: 7, name: 'Nicole G',comment: 'Such a great experience!!! Luciano was super chill, will be back! '} 
]

  return (
    <Carousel autoPlay showArrows infiniteLoop emulateTouch showThumbs={false}>
      {items.map((item) => (
        <div key={item.id} className="slide">
          <p>{item.comment}</p>
          <h1>{item.name}</h1>

        </div>
      ))}
    </Carousel>
  );
};

export default TextCarousel;
