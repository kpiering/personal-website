const initialState = [
  {
    title: 'Home',
    link: '/'
  },
  {
    title: 'Portfolio',
    link: '/portfolio'
  },
  {
    title: 'Resumé',
    link: '/resume'
  },
  {
    title: 'Contact',
    link: '/contact'
  } 
  
];

export default function menuReducer (state = initialState) {
  return state;
}
