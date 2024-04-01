// Footer.js
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#2E3333',
    padding: theme.spacing(3),
    color: 'white',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center', // Center align the cards horizontally
  },
  card: {
    backgroundColor: '#424748',
    marginBottom: theme.spacing(2),
    marginRight: '10px',
    width: '250px', // Set fixed width for each card
    height: '400px', // Set fixed height for each card
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
    marginBottom: '4px', // Add margin bottom to each list item
    fontWeight: 'bold', // Make the first list item bold
  },
}));

const FooterComponent = () => {
  const classes = useStyles();

  // Array containing data for each card
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
      "Another Card 4 Link 1",
      "Another Card 4 Link 2",
      "Another Card 4 Link 3",
      "Another Card 4 Link 4"
    ]
  ];

  return (
    <footer className={classes.footer}>
      <div className={classes.cardContainer}> {/* Container for all cards */}
        {cards.map((cardContent, index) => (
          <Card className={classes.card} key={index}>
            <CardContent>
              <ul className={classes.list}>
                {cardContent.map((link, linkIndex) => (
                  <li key={linkIndex} style={{marginBottom:10}} className={linkIndex === 0 ? classes.listItem : ''}>
                    <a href="#" className={classes.link}>{link}</a>
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
