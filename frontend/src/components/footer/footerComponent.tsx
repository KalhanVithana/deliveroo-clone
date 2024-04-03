// Footer.js
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import appStoreImg from '../../assets/images/app-store-badge.png'
import playstoreImg from '../../assets/images/images1.jpeg'
const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#2E3333',
    padding: theme.spacing(3),
    color: 'white',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#424748',
    marginBottom: theme.spacing(2),
    marginRight: '10px',
    width: '250px', 
    height: '400px', 
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    marginBottom: '4px', 
    fontWeight: 'bold', 
    fontSize:'large',
    fontFamily:'plex-sans,sans-serif'
  },
}));

const FooterComponent = () => {
  const classes = useStyles();
  const cards = [
    [
      "Discover Deliveroo",
      "Investors",
      "About us",
      "Takeaway",
      "More",
      "Newsroom",
      "Engineering blog",
      "Design blog",
      "Gift Cards",
      "Deliveroo Students",
      "Careers",
      "Restaurant signup",
      "Become a rider"
    ],
    [
      "Legal",
      "Terms and conditions",
      "Privacy",
      "Cookies",
      "Modern Slavery Statement",
      "Tax Strategy",
      "Section 172 Statement",
      "Public Authority Requests"
    ],
    [
      "Help",
      "Contact",
      "FAQs",
      "Cuisines",
      "Brands"
    ],
    [
      "Take Deliveroo with you",
    
    ]
  ];

  return (
    <footer className={classes.footer}>
      <div className={classes.cardContainer}> 
        {cards.map((cardContent, index) => (
          <Card className={classes.card} key={index}>
            <CardContent>
              <ul className={classes.list}>
                {cardContent.map((link, linkIndex) => (
                  <li key={linkIndex} style={{marginBottom:10}} className={linkIndex === 0 ? classes.listItem : ''}>
                    <a href="#" className={classes.link}>{link}</a>
                    {
                index === 3 && <>
           
             <img src={appStoreImg} style={{height:128,width:138}}/>
                <img src={playstoreImg}style={{height:40,width:138}}/>
            
                </>
               } 
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </footer>
  );
};

export default FooterComponent;
