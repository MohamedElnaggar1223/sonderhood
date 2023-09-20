import React from 'react'
import therapist3 from '../../imgs/therapist1.png'
import therapist2 from '../../imgs/therapist2.png'
import therapist1 from '../../imgs/therapist3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function AboutMeetTheTeam() 
{
    return (
        <div className='MeetTheTeamContainer'>
            <div className='MeetTheTeamHeader'>
                <div className='MeetTheTeamHeaderContainer'>
                    <div className='MeetTheTeamHeaderTitle'>
                        <h1>MEET THE <span>TEAM</span></h1>
                    </div>
                    <div className='MeetTheTeamHeaderDesc'>
                        Lorem ipsum dolor sit amet consectetur. Sed urna diam lacus cum. Facilisi quis fames suscipit malesuada. Tincidunt velit in dolor cursus cursus neque. Et turpis eget pellentesque vitae eu. Non nulla urna dictum pharetra pellentesque faucibus vel.
                    </div>
                </div>
                <div className='MeetTheTeamHeaderFilters'>
                    <div className='MeetTheTeamHeaderFiltersInput'>
                        <label htmlFor='filters'>FILTER BY:</label>
                        <select id='filters'>
                            <option value="allservices">ALL SERVICES</option>
                            <option value="group">GROUP THERAPY</option>
                            <option value="child">CHILD THERAPY</option>
                        </select>
                    </div>
                </div>
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
