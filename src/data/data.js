import uuid from 'uuid/v1';
import profile from '../assets/profile.png';
import profileGray from '../assets/profile-gray.png';

export const data = {
   users: [
        {
            id: uuid(),
            username: 'bcanlas',
            fName: 'Brian',
            lName: 'Canlas',
            password: 'sample',
            email: 'sample@gmail.com',
            phone: '(111) 111 - 111',
            applications: [
                {
                    id: uuid(),
                    company: 'Redwood',
                    jobTitle: 'Dev',
                    dateApplied: '10/10/18',
                    contact: 'Harrison (111) 111-111',
                    recruiter: 'NA',
                    lastContact: '',
                    phase: 'Offer',
                    notes: 'Cool cool cool'
                }
            ],
            profilePic: profileGray,
            posts: [],
            currentPosition: 'Dev - RWCA',
            employed: true,
            cohort: 'Summer 17',
            slackUsername: 'briancanlas'
        },

        {
            id: uuid(),
            username: 'bcanlasTwo',
            fName: 'Hello',
            lName: 'World',
            password: 'sample',
            email: 'sample@gmail.com',
            phone: '(111) 111 - 111',
            applications: [
                {
                    id: uuid(),
                    company: 'Redwood',
                    jobTitle: 'Dev',
                    dateApplied: '10/10/18',
                    contact: 'Harrison (111) 111-111',
                    recruiter: 'NA',
                    lastContact: '',
                    phase: 'Offer',
                    notes: 'Cool cool cool'
                }
            ],
            profilePic: profileGray,
            posts: [],
            currentPosition: 'Dev - RWCA',
            employed: true,
            cohort: 'Summer 17',
            slackUsername: 'Firelord'
        },
        {
            id: uuid(),
            username: 'bcanlasTwo',
            fName: 'Foo',
            lName: 'Bar',
            password: 'sample',
            email: 'sample@gmail.com',
            phone: '(111) 111 - 111',
            applications: [
                {
                    id: uuid(),
                    company: 'Redwood',
                    jobTitle: 'Dev',
                    dateApplied: '10/10/18',
                    contact: 'Harrison (111) 111-111',
                    recruiter: 'NA',
                    lastContact: '',
                    phase: 'Offer',
                    notes: 'Cool cool cool'
                }
            ],
            profilePic: profileGray,
            posts: [],
            currentPosition: 'Dev - RWCA',
            employed: true,
            cohort: 'Summer 17',
            slackUsername: 'hohihe'
        }
   ],
   
   posts: [
       {
           id: uuid(),
           title: 'Welcome to the Network',
           body: 'This is where you can store all your applications in your profile to track your progress. Create posts like interview advice for fellow alumnis and etc....',
           link: 'redwoodcodeacademy.com',
           date: '4/26/18',
           author: 'Admin'
       }
   ]
}