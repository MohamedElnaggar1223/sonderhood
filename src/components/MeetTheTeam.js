import React from 'react'
import therapist3 from '../imgs/therapist1.png'
import therapist2 from '../imgs/therapist2.png'
import therapist1 from '../imgs/therapist3.png'

export default function MeetTheTeam() 
{
    return (
        <div className='MeetTheTeamContainer'>
            <div className='MeetTheTeamHeader'>
                <h1>MEET THE <span>TEAM</span></h1>
            </div>
            <div className='MeetTheTeamItemsContainer'>
                <div className='MeetTheTeamItem'>
                    <div className='MeetTheTeamItemImage'>
                        <img src={therapist1} alt='t4' />
                    </div>
                    <div className='MeetTheTeamItemInfo'>
                        <div className='MeetTheTeamItemName'>
                            Full Name
                        </div>
                        <div className='MeetTheTeamItemDesc'>
                            Founder & Counseling Psychologist
                        </div>
                    </div>
                    <div className='MeetTheTeamItemProf'>
                        <div className='MeetTheTeamItemProfItem'>
                            Child Therapy
                        </div>
                        <div className='MeetTheTeamItemProfItem'>
                            Group Therapy
                        </div>
                    </div>
                </div>

                <div className='MeetTheTeamItem'>
                    <div className='MeetTheTeamItemImage'>
                        <img src={therapist2} alt='t2' />
                    </div>
                    <div className='MeetTheTeamItemInfo'>
                        <div className='MeetTheTeamItemName'>
                            Full Name
                        </div>
                        <div className='MeetTheTeamItemDesc'>
                            Founder & Counseling Psychologist
                        </div>
                    </div>
                    <div className='MeetTheTeamItemProf'>
                        <div className='MeetTheTeamItemProfItem'>
                            Child Therapy
                        </div>
                        <div className='MeetTheTeamItemProfItem'>
                            Group Therapy
                        </div>
                    </div>
                </div>

                <div className='MeetTheTeamItem'>
                    <div className='MeetTheTeamItemImage'>
                    <img src={therapist3} alt='t3' />
                    </div>
                    <div className='MeetTheTeamItemInfo'>
                        <div className='MeetTheTeamItemName'>
                            Full Name
                        </div>
                        <div className='MeetTheTeamItemDesc'>
                            Founder & Counseling Psychologist
                        </div>
                    </div>
                    <div className='MeetTheTeamItemProf'>
                        <div className='MeetTheTeamItemProfItem'>
                            Child Therapy
                        </div>
                        <div className='MeetTheTeamItemProfItem'>
                            Group Therapy
                        </div>
                    </div>
                </div>

                <div className='MeetTheTeamItem'>
                    <div className='MeetTheTeamItemImage'>
                        <img src={therapist1} alt='t1' />
                    </div>
                    <div className='MeetTheTeamItemInfo'>
                        <div className='MeetTheTeamItemName'>
                            Full Name
                        </div>
                        <div className='MeetTheTeamItemDesc'>
                            Founder & Counseling Psychologist
                        </div>
                    </div>
                    <div className='MeetTheTeamItemProf'>
                        <div className='MeetTheTeamItemProfItem'>
                            Child Therapy
                        </div>
                        <div className='MeetTheTeamItemProfItem'>
                            Group Therapy
                        </div>
                    </div>
                </div>

                <div className='MeetTheTeamItem'>
                    <div className='MeetTheTeamItemImage'>
                        <img src={therapist2} alt='t2' />
                    </div>
                    <div className='MeetTheTeamItemInfo'>
                        <div className='MeetTheTeamItemName'>
                            Full Name
                        </div>
                        <div className='MeetTheTeamItemDesc'>
                            Founder & Counseling Psychologist
                        </div>
                    </div>
                    <div className='MeetTheTeamItemProf'>
                        <div className='MeetTheTeamItemProfItem'>
                            Child Therapy
                        </div>
                        <div className='MeetTheTeamItemProfItem'>
                            Group Therapy
                        </div>
                    </div>
                </div>

                <div className='MeetTheTeamItem'>
                    <div className='MeetTheTeamItemImage'>
                    <img src={therapist3} alt='t3' />
                    </div>
                    <div className='MeetTheTeamItemInfo'>
                        <div className='MeetTheTeamItemName'>
                            Full Name
                        </div>
                        <div className='MeetTheTeamItemDesc'>
                            Founder & Counseling Psychologist
                        </div>
                    </div>
                    <div className='MeetTheTeamItemProf'>
                        <div className='MeetTheTeamItemProfItem'>
                            Child Therapy
                        </div>
                        <div className='MeetTheTeamItemProfItem'>
                            Group Therapy
                        </div>
                    </div>
                </div>
            </div>
            <div className='MeetTheTeamItemsButtons'>
                    <button className='MeetTheTeamItemBookButton'>BOOK A SESSION</button>
                    <button className='MeetTheTeamItemContactButton'>CONTACT US</button>
            </div>
        </div>
    )
}
