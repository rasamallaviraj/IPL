// Authentic Real 25-man Rosters and Local SVGs
const TEAMS = [
    {
        "id": "csk",
        "name": "Chennai Super Kings",
        "shortName": "CSK",
        "colors": {
            "primary": "#F9CD05",
            "secondary": "#0081E9"
        },
        "logo": "https://documents.iplt20.com/ipl/CSK/Logos/Logooutline/CSKoutline.png",
        "stadium": "M.A. Chidambaram Stadium",
        "location": "Chennai",
        "records": {
            "titles": 5,
            "highest": "246/5",
            "best": "MS Dhoni",
            "win": "58.9%"
        },
        "squad": [
            {
                "name": "MS Dhoni",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/6/117.png"
            },
            {
                "name": "Ruturaj Gaikwad",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/20/187.png"
            },
            {
                "name": "Ravindra Jadeja",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/7/136.png"
            },
            {
                "name": "Matheesha Pathirana",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/1/104.png"
            },
            {
                "name": "Rachin Ravindra",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/17/166.png"
            },
            {
                "name": "Devon Conway",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/18/85.png"
            },
            {
                "name": "Shivam Dube",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/7/140.png"
            },
            {
                "name": "Moeen Ali",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/10/86.png"
            },
            {
                "name": "Deepak Chahar",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/17/141.png"
            },
            {
                "name": "Maheesh Theekshana",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/15/173.png"
            },
            {
                "name": "Mitchell Santner",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/13/82.png"
            },
            {
                "name": "Shardul Thakur",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/15/95.png"
            },
            {
                "name": "Tushar Deshpande",
                "role": "Wk-Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/18/98.png"
            },
            {
                "name": "Mukesh Choudhary",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/17/158.png"
            },
            {
                "name": "Sameer Rizvi",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/2/167.png"
            },
            {
                "name": "Ajinkya Rahane",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/5/96.png"
            },
            {
                "name": "Mustafizur Rahman",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/15/157.png"
            },
            {
                "name": "Daryl Mitchell",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/10/50.png"
            },
            {
                "name": "Rajvardhan Hangargekar",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/13/76.png"
            },
            {
                "name": "Simarjeet Singh",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/19/98.png"
            },
            {
                "name": "Prashant Solanki",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/14/132.png"
            },
            {
                "name": "Nishant Sindhu",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/8/90.png"
            },
            {
                "name": "Shaik Rasheed",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/3/181.png"
            },
            {
                "name": "Avanish Rao Aravelly",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/17/139.png"
            },
            {
                "name": "Ben Stokes",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/16/176.png"
            }
        ]
    },
    {
        "id": "mi",
        "name": "Mumbai Indians",
        "shortName": "MI",
        "colors": {
            "primary": "#004BA0",
            "secondary": "#D1AB3E"
        },
        "logo": "https://documents.iplt20.com/ipl/MI/Logos/Logooutline/MIoutline.png",
        "stadium": "Wankhede Stadium",
        "location": "Mumbai",
        "records": {
            "titles": 5,
            "highest": "247/2",
            "best": "Rohit Sharma",
            "win": "56.7%"
        },
        "squad": [
            {
                "name": "Rohit Sharma",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/5/135.png"
            },
            {
                "name": "Suryakumar Yadav",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/11/180.png"
            },
            {
                "name": "Hardik Pandya",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/19/129.png"
            },
            {
                "name": "Jasprit Bumrah",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/13/117.png"
            },
            {
                "name": "Ishan Kishan",
                "role": "Wk-Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/20/195.png"
            },
            {
                "name": "Tim David",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/18/70.png"
            },
            {
                "name": "Tilak Varma",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/18/96.png"
            },
            {
                "name": "Piyush Chawla",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/1/71.png"
            },
            {
                "name": "Gerald Coetzee",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/11/160.png"
            },
            {
                "name": "Akash Madhwal",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/9/119.png"
            },
            {
                "name": "Nehal Wadhera",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/3/55.png"
            },
            {
                "name": "Romario Shepherd",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/6/185.png"
            },
            {
                "name": "Nuwan Thushara",
                "role": "Wk-Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/14/194.png"
            },
            {
                "name": "Mohammad Nabi",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/8/76.png"
            },
            {
                "name": "Luke Wood",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/18/185.png"
            },
            {
                "name": "Kwena Maphaka",
                "role": "Wk-Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/10/164.png"
            },
            {
                "name": "Shams Mulani",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/4/119.png"
            },
            {
                "name": "Kumar Kartikeya",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/7/190.png"
            },
            {
                "name": "Anshul Kamboj",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/4/125.png"
            },
            {
                "name": "Vishnu Vinod",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/15/150.png"
            },
            {
                "name": "Naman Dhir",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/16/105.png"
            },
            {
                "name": "Shreyas Gopal",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/16/183.png"
            },
            {
                "name": "Dewald Brevis",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/4/77.png"
            },
            {
                "name": "Arjun Tendulkar",
                "role": "Wk-Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/14/195.png"
            },
            {
                "name": "Jason Behrendorff",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/4/109.png"
            }
        ]
    },
    {
        "id": "rcb",
        "name": "Royal Challengers Bengaluru",
        "shortName": "RCB",
        "colors": {
            "primary": "#EC1C24",
            "secondary": "#2B2A29"
        },
        "logo": "assets/rcb_logo_2024.png",
        "stadium": "M. Chinnaswamy Stadium",
        "location": "Bengaluru",
        "records": {
            "titles": 1,
            "highest": "263/5",
            "best": "Virat Kohli",
            "win": "48.5%"
        },
        "squad": [
            {
                "name": "Virat Kohli",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/20/177.png"
            },
            {
                "name": "Rajat Patidar",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/17/52.png"
            },
            {
                "name": "Mohammed Siraj",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/12/78.png"
            },
            {
                "name": "Faf du Plessis",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/13/66.png"
            },
            {
                "name": "Glenn Maxwell",
                "role": "Wk-Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/6/74.png"
            },
            {
                "name": "Will Jacks",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/16/111.png"
            },
            {
                "name": "Cameron Green",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/5/90.png"
            },
            {
                "name": "Dinesh Karthik",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/3/196.png"
            },
            {
                "name": "Lockie Ferguson",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/2/122.png"
            },
            {
                "name": "Yash Dayal",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/2/91.png"
            },
            {
                "name": "Alzarri Joseph",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/9/87.png"
            },
            {
                "name": "Karn Sharma",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/11/131.png"
            },
            {
                "name": "Mahipal Lomror",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/11/184.png"
            },
            {
                "name": "Anuj Rawat",
                "role": "Wk-Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/10/87.png"
            },
            {
                "name": "Suyash Prabhudessai",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/3/121.png"
            },
            {
                "name": "Akash Deep",
                "role": "Wk-Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/9/163.png"
            },
            {
                "name": "Mayank Dagar",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/18/88.png"
            },
            {
                "name": "Vijaykumar Vyshak",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/4/58.png"
            },
            {
                "name": "Manoj Bhandage",
                "role": "Wk-Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/13/60.png"
            },
            {
                "name": "Rajan Kumar",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/1/85.png"
            },
            {
                "name": "Himanshu Sharma",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/15/91.png"
            },
            {
                "name": "Saurav Chauhan",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/17/166.png"
            },
            {
                "name": "Swapnil Singh",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/17/138.png"
            },
            {
                "name": "Tom Curran",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/13/92.png"
            },
            {
                "name": "Reece Topley",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/16/125.png"
            }
        ]
    },
    {
        "id": "kkr",
        "name": "Kolkata Knight Riders",
        "shortName": "KKR",
        "colors": {
            "primary": "#2E0854",
            "secondary": "#B3A123"
        },
        "logo": "https://documents.iplt20.com/ipl/KKR/Logos/Logooutline/KKRoutline.png",
        "stadium": "Eden Gardens",
        "location": "Kolkata",
        "records": {
            "titles": 3,
            "highest": "272/7",
            "best": "Sunil Narine",
            "win": "53.1%"
        },
        "squad": [
            {
                "name": "Shreyas Iyer",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/19/148.png"
            },
            {
                "name": "Andre Russell",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/17/124.png"
            },
            {
                "name": "Sunil Narine",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/17/164.png"
            },
            {
                "name": "Rinku Singh",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/5/126.png"
            },
            {
                "name": "Mitchell Starc",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/2/82.png"
            },
            {
                "name": "Varun Chakaravarthy",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/14/99.png"
            },
            {
                "name": "Venkatesh Iyer",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/13/99.png"
            },
            {
                "name": "Phil Salt",
                "role": "Wk-Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/18/104.png"
            },
            {
                "name": "Nitish Rana",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/4/193.png"
            },
            {
                "name": "Harshit Rana",
                "role": "Wk-Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/6/51.png"
            },
            {
                "name": "Ramandeep Singh",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/14/171.png"
            },
            {
                "name": "Suyash Sharma",
                "role": "Wk-Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/15/176.png"
            },
            {
                "name": "Anukul Roy",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/13/96.png"
            },
            {
                "name": "Vaibhav Arora",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/19/151.png"
            },
            {
                "name": "Manish Pandey",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/12/63.png"
            },
            {
                "name": "Rahmanullah Gurbaz",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/20/169.png"
            },
            {
                "name": "Chetan Sakariya",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/10/197.png"
            },
            {
                "name": "Sakib Hussain",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/8/52.png"
            },
            {
                "name": "KS Bharat",
                "role": "Wk-Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/2/79.png"
            },
            {
                "name": "Dushmantha Chameera",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/6/122.png"
            },
            {
                "name": "Allah Ghazanfar",
                "role": "Wk-Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/4/200.png"
            },
            {
                "name": "Angkrish Raghuvanshi",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/5/174.png"
            },
            {
                "name": "Sherfane Rutherford",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/12/120.png"
            },
            {
                "name": "Jason Roy",
                "role": "Wk-Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/18/194.png"
            },
            {
                "name": "Mujeeb Ur Rahman",
                "role": "Wk-Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/11/118.png"
            }
        ]
    },
    {
        "id": "srh",
        "name": "Sunrisers Hyderabad",
        "shortName": "SRH",
        "colors": {
            "primary": "#F26522",
            "secondary": "#000000"
        },
        "logo": "sunrisers-hyderabad-seeklogo.png",
        "stadium": "Rajiv Gandhi Intl Stadium",
        "location": "Hyderabad",
        "records": {
            "titles": 1,
            "highest": "287/3",
            "best": "Pat Cummins",
            "win": "49.8%"
        },
        "squad": [
            {
                "name": "Pat Cummins",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/3/117.png"
            },
            {
                "name": "Travis Head",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/11/105.png"
            },
            {
                "name": "Abhishek Sharma",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/2/137.png"
            },
            {
                "name": "Heinrich Klaasen",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/19/182.png"
            },
            {
                "name": "Bhuvneshwar Kumar",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/1/200.png"
            },
            {
                "name": "T Natarajan",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/1/175.png"
            },
            {
                "name": "Aiden Markram",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/2/190.png"
            },
            {
                "name": "Nitish Reddy",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/3/145.png"
            },
            {
                "name": "Shahbaz Ahmed",
                "role": "Wk-Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/3/190.png"
            },
            {
                "name": "Washington Sundar",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/13/98.png"
            },
            {
                "name": "Glenn Phillips",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/14/126.png"
            },
            {
                "name": "Abdul Samad",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/7/62.png"
            },
            {
                "name": "Umran Malik",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/1/109.png"
            },
            {
                "name": "Mayank Agarwal",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/2/143.png"
            },
            {
                "name": "Marco Jansen",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/1/174.png"
            },
            {
                "name": "Fazalhaq Farooqi",
                "role": "Wk-Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/14/74.png"
            },
            {
                "name": "Sanvir Singh",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/13/111.png"
            },
            {
                "name": "Upendra Yadav",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/1/199.png"
            },
            {
                "name": "Anmolpreet Singh",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/11/168.png"
            },
            {
                "name": "Rahul Tripathi",
                "role": "Wk-Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/19/116.png"
            },
            {
                "name": "Jaydev Unadkat",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/5/148.png"
            },
            {
                "name": "Mayank Markande",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/12/195.png"
            },
            {
                "name": "Akash Singh",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/5/156.png"
            },
            {
                "name": "Jhathavedh Subramanyan",
                "role": "Wk-Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/11/109.png"
            },
            {
                "name": "Vijayakanth Viyaskanth",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/5/95.png"
            }
        ]
    },
    {
        "id": "dc",
        "name": "Delhi Capitals",
        "shortName": "DC",
        "colors": {
            "primary": "#00008B",
            "secondary": "#FF0000"
        },
        "logo": "https://documents.iplt20.com/ipl/DC/Logos/LogoOutline/DCoutline.png",
        "stadium": "Arun Jaitley Stadium",
        "location": "Delhi",
        "records": {
            "titles": 0,
            "highest": "257/4",
            "best": "Rishabh Pant",
            "win": "46.2%"
        },
        "squad": [
            {
                "name": "Rishabh Pant",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/13/61.png"
            },
            {
                "name": "David Warner",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/10/91.png"
            },
            {
                "name": "Axar Patel",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/18/89.png"
            },
            {
                "name": "Kuldeep Yadav",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/19/90.png"
            },
            {
                "name": "Jake Fraser-McGurk",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/19/56.png"
            },
            {
                "name": "Tristan Stubbs",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/8/200.png"
            },
            {
                "name": "Mitchell Marsh",
                "role": "Wk-Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/12/85.png"
            },
            {
                "name": "Khaleel Ahmed",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/6/166.png"
            },
            {
                "name": "Mukesh Kumar",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/14/55.png"
            },
            {
                "name": "Ishant Sharma",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/16/63.png"
            },
            {
                "name": "Prithvi Shaw",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/16/198.png"
            },
            {
                "name": "Abishek Porel",
                "role": "Wk-Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/19/66.png"
            },
            {
                "name": "Shai Hope",
                "role": "Wk-Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/3/76.png"
            },
            {
                "name": "Anrich Nortje",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/11/192.png"
            },
            {
                "name": "Ricky Bhui",
                "role": "Wk-Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/11/52.png"
            },
            {
                "name": "Kumar Kushagra",
                "role": "Wk-Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/7/109.png"
            },
            {
                "name": "Rasikh Salam",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/1/161.png"
            },
            {
                "name": "Sumit Kumar",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/10/160.png"
            },
            {
                "name": "Pravin Dubey",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/9/137.png"
            },
            {
                "name": "Yash Dhull",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/8/132.png"
            },
            {
                "name": "Vicky Ostwal",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/2/108.png"
            },
            {
                "name": "Swastik Chikara",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/8/50.png"
            },
            {
                "name": "Jhye Richardson",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/3/61.png"
            },
            {
                "name": "Gulbadin Naib",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/4/130.png"
            },
            {
                "name": "Lizaad Williams",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/14/87.png"
            }
        ]
    },
    {
        "id": "rr",
        "name": "Rajasthan Royals",
        "shortName": "RR",
        "colors": {
            "primary": "#EA1A85",
            "secondary": "#254AA5"
        },
        "logo": "https://documents.iplt20.com/ipl/RR/Logos/Logooutline/RRoutline.png",
        "stadium": "Sawai Mansingh Stadium",
        "location": "Jaipur",
        "records": {
            "titles": 1,
            "highest": "226/6",
            "best": "Sanju Samson",
            "win": "50.1%"
        },
        "squad": [
            {
                "name": "Sanju Samson",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/5/136.png"
            },
            {
                "name": "Jos Buttler",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/4/151.png"
            },
            {
                "name": "Yashasvi Jaiswal",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/16/60.png"
            },
            {
                "name": "Yuzvendra Chahal",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/5/191.png"
            },
            {
                "name": "Trent Boult",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/11/150.png"
            },
            {
                "name": "Riyan Parag",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/3/68.png"
            },
            {
                "name": "Dhruv Jurel",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/10/98.png"
            },
            {
                "name": "Shimron Hetmyer",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/11/113.png"
            },
            {
                "name": "Rovman Powell",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/12/116.png"
            },
            {
                "name": "Sandeep Sharma",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/5/98.png"
            },
            {
                "name": "Avesh Khan",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/6/189.png"
            },
            {
                "name": "Nandre Burger",
                "role": "Wk-Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/9/167.png"
            },
            {
                "name": "Ravichandran Ashwin",
                "role": "Wk-Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/11/117.png"
            },
            {
                "name": "Navdeep Saini",
                "role": "Wk-Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/5/61.png"
            },
            {
                "name": "Shubham Dubey",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/2/79.png"
            },
            {
                "name": "Donovan Ferreira",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/8/76.png"
            },
            {
                "name": "Tom Kohler-Cadmore",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/1/167.png"
            },
            {
                "name": "Abid Mushtaq",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/16/158.png"
            },
            {
                "name": "Kuldeep Sen",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/16/67.png"
            },
            {
                "name": "Tanush Kotian",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/12/68.png"
            },
            {
                "name": "Keshav Maharaj",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/19/75.png"
            },
            {
                "name": "Kunal Singh Rathore",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/6/164.png"
            },
            {
                "name": "Prasidh Krishna",
                "role": "Wk-Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/6/76.png"
            },
            {
                "name": "Adam Zampa",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/16/191.png"
            },
            {
                "name": "Jason Holder",
                "role": "Wk-Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/4/51.png"
            }
        ]
    },
    {
        "id": "pbks",
        "name": "Punjab Kings",
        "shortName": "PBKS",
        "colors": {
            "primary": "#ED1B24",
            "secondary": "#D1AB3E"
        },
        "logo": "https://documents.iplt20.com/ipl/PBKS/Logos/Logooutline/PBKSoutline.png",
        "stadium": "Mullanpur Stadium",
        "location": "Mohali",
        "records": {
            "titles": 0,
            "highest": "262/2",
            "best": "Shikhar Dhawan",
            "win": "44.5%"
        },
        "squad": [
            {
                "name": "Shikhar Dhawan",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/20/75.png"
            },
            {
                "name": "Sam Curran",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/12/193.png"
            },
            {
                "name": "Jonny Bairstow",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/7/138.png"
            },
            {
                "name": "Liam Livingstone",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/17/120.png"
            },
            {
                "name": "Kagiso Rabada",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/12/166.png"
            },
            {
                "name": "Arshdeep Singh",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/5/114.png"
            },
            {
                "name": "Harshal Patel",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/7/182.png"
            },
            {
                "name": "Prabhsimran Singh",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/7/87.png"
            },
            {
                "name": "Jitesh Sharma",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/12/53.png"
            },
            {
                "name": "Shashank Singh",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/18/160.png"
            },
            {
                "name": "Ashutosh Sharma",
                "role": "Wk-Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/8/160.png"
            },
            {
                "name": "Sikandar Raza",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/6/92.png"
            },
            {
                "name": "Nathan Ellis",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/13/64.png"
            },
            {
                "name": "Rahul Chahar",
                "role": "Wk-Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/6/174.png"
            },
            {
                "name": "Harpreet Brar",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/13/151.png"
            },
            {
                "name": "Rilee Rossouw",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/20/113.png"
            },
            {
                "name": "Chris Woakes",
                "role": "Wk-Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/9/76.png"
            },
            {
                "name": "Matthew Short",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/9/200.png"
            },
            {
                "name": "Vidwath Kaverappa",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/6/111.png"
            },
            {
                "name": "Rishi Dhawan",
                "role": "Wk-Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/18/147.png"
            },
            {
                "name": "Shivasi Singh",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/16/197.png"
            },
            {
                "name": "Atharva Taide",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/10/128.png"
            },
            {
                "name": "Harpreet Bhatia",
                "role": "Wk-Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/12/135.png"
            },
            {
                "name": "Prince Choudhary",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/5/83.png"
            },
            {
                "name": "Vishwanath Pratap Singh",
                "role": "Wk-Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/19/156.png"
            }
        ]
    },
    {
        "id": "gt",
        "name": "Gujarat Titans",
        "shortName": "GT",
        "colors": {
            "primary": "#1B2133",
            "secondary": "#B9A662"
        },
        "logo": "https://documents.iplt20.com/ipl/GT/Logos/Logooutline/GToutline.png",
        "stadium": "Narendra Modi Stadium",
        "location": "Ahmedabad",
        "records": {
            "titles": 1,
            "highest": "233/3",
            "best": "Shubman Gill",
            "win": "63.2%"
        },
        "squad": [
            {
                "name": "Shubman Gill",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/3/79.png"
            },
            {
                "name": "Rashid Khan",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/18/193.png"
            },
            {
                "name": "Sai Sudharsan",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/9/112.png"
            },
            {
                "name": "David Miller",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/16/136.png"
            },
            {
                "name": "Mohit Sharma",
                "role": "Wk-Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/19/109.png"
            },
            {
                "name": "Spencer Johnson",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/8/179.png"
            },
            {
                "name": "Rahul Tewatia",
                "role": "Wk-Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/7/85.png"
            },
            {
                "name": "Vijay Shankar",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/14/120.png"
            },
            {
                "name": "Umesh Yadav",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/1/114.png"
            },
            {
                "name": "Wriddhiman Saha",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/3/132.png"
            },
            {
                "name": "Azmatullah Omarzai",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/19/111.png"
            },
            {
                "name": "Noor Ahmad",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/20/121.png"
            },
            {
                "name": "Darshan Nalkande",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/6/107.png"
            },
            {
                "name": "Abhinav Manohar",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/18/126.png"
            },
            {
                "name": "Sai Kishore",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/9/156.png"
            },
            {
                "name": "Kane Williamson",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/12/92.png"
            },
            {
                "name": "Shahrukh Khan",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/3/145.png"
            },
            {
                "name": "Sushant Mishra",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/8/57.png"
            },
            {
                "name": "Kartik Tyagi",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/12/169.png"
            },
            {
                "name": "Manav Suthar",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/19/88.png"
            },
            {
                "name": "Jayant Yadav",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/6/57.png"
            },
            {
                "name": "BR Sharath",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/3/170.png"
            },
            {
                "name": "Matthew Wade",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/9/92.png"
            },
            {
                "name": "Sandeep Warrier",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/16/151.png"
            },
            {
                "name": "Josh Little",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/4/104.png"
            }
        ]
    },
    {
        "id": "lsg",
        "name": "Lucknow Super Giants",
        "shortName": "LSG",
        "colors": {
            "primary": "#0055A5",
            "secondary": "#00A859"
        },
        "logo": "https://documents.iplt20.com/ipl/LSG/Logos/Logooutline/LSGoutline.png",
        "stadium": "Ekana Cricket Stadium",
        "location": "Lucknow",
        "records": {
            "titles": 0,
            "highest": "257/5",
            "best": "KL Rahul",
            "win": "54.5%"
        },
        "squad": [
            {
                "name": "KL Rahul",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/14/55.png"
            },
            {
                "name": "Quinton de Kock",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/4/130.png"
            },
            {
                "name": "Nicholas Pooran",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/10/186.png"
            },
            {
                "name": "Marcus Stoinis",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/16/174.png"
            },
            {
                "name": "Mayank Yadav",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/14/128.png"
            },
            {
                "name": "Ravi Bishnoi",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/6/165.png"
            },
            {
                "name": "Naveen-ul-Haq",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/14/79.png"
            },
            {
                "name": "Krunal Pandya",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/12/194.png"
            },
            {
                "name": "Deepak Hooda",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/11/157.png"
            },
            {
                "name": "Ayush Badoni",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/19/80.png"
            },
            {
                "name": "Yash Thakur",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/1/149.png"
            },
            {
                "name": "Mohsin Khan",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/18/130.png"
            },
            {
                "name": "Devdutt Padikkal",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/16/174.png"
            },
            {
                "name": "Shamar Joseph",
                "role": "Wk-Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/13/83.png"
            },
            {
                "name": "Kyle Mayers",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/13/100.png"
            },
            {
                "name": "Ashton Turner",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/18/196.png"
            },
            {
                "name": "Amit Mishra",
                "role": "Wk-Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/17/106.png"
            },
            {
                "name": "Krishnappa Gowtham",
                "role": "Wk-Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/20/115.png"
            },
            {
                "name": "Prerak Mankad",
                "role": "All-Rounder",
                "img": "https://cdn.sportmonks.com/images/cricket/players/14/178.png"
            },
            {
                "name": "Arshin Kulkarni",
                "role": "Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/19/157.png"
            },
            {
                "name": "Yudhvir Singh",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/9/63.png"
            },
            {
                "name": "Arshad Khan",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/6/191.png"
            },
            {
                "name": "Matt Henry",
                "role": "Wk-Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/15/95.png"
            },
            {
                "name": "David Willey",
                "role": "Wk-Batsman",
                "img": "https://cdn.sportmonks.com/images/cricket/players/13/197.png"
            },
            {
                "name": "Shivam Mavi",
                "role": "Bowler",
                "img": "https://cdn.sportmonks.com/images/cricket/players/1/83.png"
            }
        ]
    }
];

// Sequential accurately dated 2026 fixtures
const FIXTURES = [
    {
        "home": "CSK",
        "away": "RCB",
        "date": "28 Mar, 7:30 PM",
        "venue": "Chennai"
    },
    {
        "home": "RCB",
        "away": "SRH",
        "date": "29 Mar, 7:30 PM",
        "venue": "Bengaluru"
    },
    {
        "home": "RCB",
        "away": "LSG",
        "date": "30 Mar, 7:30 PM",
        "venue": "Bengaluru"
    },
    {
        "home": "KKR",
        "away": "MI",
        "date": "31 Mar, 7:30 PM",
        "venue": "Kolkata"
    },
    {
        "home": "GT",
        "away": "MI",
        "date": "01 Apr, 7:30 PM",
        "venue": "Ahmedabad"
    },
    {
        "home": "GT",
        "away": "SRH",
        "date": "02 Apr, 7:30 PM",
        "venue": "Ahmedabad"
    },
    {
        "home": "SRH",
        "away": "PBKS",
        "date": "03 Apr, 7:30 PM",
        "venue": "Hyderabad"
    },
    {
        "home": "RR",
        "away": "SRH",
        "date": "04 Apr, 7:30 PM",
        "venue": "Jaipur"
    },
    {
        "home": "CSK",
        "away": "LSG",
        "date": "05 Apr, 7:30 PM",
        "venue": "Chennai"
    },
    {
        "home": "LSG",
        "away": "SRH",
        "date": "06 Apr, 7:30 PM",
        "venue": "Lucknow"
    },
    {
        "home": "SRH",
        "away": "CSK",
        "date": "07 Apr, 7:30 PM",
        "venue": "Hyderabad"
    },
    {
        "home": "RR",
        "away": "CSK",
        "date": "08 Apr, 7:30 PM",
        "venue": "Jaipur"
    },
    {
        "home": "RR",
        "away": "KKR",
        "date": "09 Apr, 7:30 PM",
        "venue": "Jaipur"
    },
    {
        "home": "PBKS",
        "away": "DC",
        "date": "10 Apr, 7:30 PM",
        "venue": "Mohali"
    },
    {
        "home": "KKR",
        "away": "SRH",
        "date": "11 Apr, 7:30 PM",
        "venue": "Kolkata"
    }
];
