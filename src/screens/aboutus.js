import './screencss/aboutus.css'
const imgsrc="https://picsum.photos/200/300?grayscale";
function Aboutus(){
    if(window.innerWidth < 700) {
        return(
            <div className='aboutusback'>
            <div className='card abtus babyabtus2' >
                <img src="https://picsum.photos/200/300?grayscale" className='topmargin bottommargin'></img>
                <div>
                    Alpaviraam-Our Story
                    Having found the similar interest and understanding of the practices in psychotherapy, we decided on creating a
                    space together which resonated with our ideas of practice. Thus, taking a ‘pause’ from our individual work
                    helped us create “Alpaviraam”.Alpaviraam (Comma&-punctuation in English) literally means a pause between parts of a sentence, or a small
                    interval. There is always an Alpaviraam, when the sentences clutter and stop making sense as well as when there
                    is something more to look forward to. When used properly, these commas help making meaning out of the
                    sentences much like how we intend to use this space for mental health.
    
                </div>   
            </div>

            <div className='card babyabtus2 abtus'>
                <div>
                    An individual develops different parts of oneself through various life experiences. At Alpaviraam, we believe
                    the major work in therapy is to bring awareness and integration of these parts, however distant they may seem.
                    Thus, we intend to address the symptom and go beyond it to explore, understand and manage various mental
                    health concerns.
                    Introduction (about us)
                    Shreya is a practicing Psychotherapist and Clinical Psychologist, registered with RCI (Rehabilitation council of India). Her approach is eclectic with an inclination for psychodynamic and existential perspective.
                </div>
            <img src="https://picsum.photos/200/300?grayscale" className='topmargin bottommargin'></img>
            </div>

            <div className='card babyabtus2 abtus'>
                <img src="https://picsum.photos/200/300?grayscale" className='topmargin bottommargin'></img>
                <div>
                    She has enjoyed working with children in several non-governmental organizations and schools. Her work is also extended to young adults and adults through her private practice. Additionally, she is a certified Dance Movement Therapy practitioner who incorporates various elements of expressive arts to her practice. 
                    She aspires to facilitate a deeper understanding of emotions and mental processes by providing a relational and creative therapeutic space. 
                </div>
            </div>

            <div className='card abtus'>
                <div className='topmargin bottommargin'>
                    Khushnuma is a practicing psychotherapist and a clinical psychologist, registered with RCI (Rehabilitation Council of India) since 3 years. 
                    She has had an experience of working as a Psycho-oncologist for 2 years at a cancer setup in Vadodara. Along with various mental health concerns/disorders, she has also been keen in working with individuals as well as the families of those suffering from diseases such as cancer and helping in management of the emotional and psychological aspects of the same. 
                    She uses an eclectic approach of psychotherapy with inclination towards psychodynamic and existential schools of psychotherapy. She intends to go beyond just the symptom management and provide a space for personal as well as relational growth.
                </div>
            </div>
        </div>  
        )
     }
    else {
        return(
        <div className='aboutusback'>
            <div className='card abtus babyabtus' >
                <img src="https://picsum.photos/200/300?grayscale"></img>
                <div>
                    Alpaviraam-Our Story
                    Having found the similar interest and understanding of the practices in psychotherapy, we decided on creating a
                    space together which resonated with our ideas of practice. Thus, taking a ‘pause’ from our individual work
                    helped us create “Alpaviraam”.Alpaviraam (Comma&-punctuation in English) literally means a pause between parts of a sentence, or a small
                    interval. There is always an Alpaviraam, when the sentences clutter and stop making sense as well as when there
                    is something more to look forward to. When used properly, these commas help making meaning out of the
                    sentences much like how we intend to use this space for mental health.
    
                </div>   
            </div>

            <div className='card babyabtus abtus'>
                <div>
                    An individual develops different parts of oneself through various life experiences. At Alpaviraam, we believe
                    the major work in therapy is to bring awareness and integration of these parts, however distant they may seem.
                    Thus, we intend to address the symptom and go beyond it to explore, understand and manage various mental
                    health concerns.
                    Introduction (about us)
                    Shreya is a practicing Psychotherapist and Clinical Psychologist, registered with RCI (Rehabilitation council of India). Her approach is eclectic with an inclination for psychodynamic and existential perspective.
                </div>
            <img src="https://picsum.photos/200/300?grayscale"></img>
            </div>

            <div className='card babyabtus abtus'>
                <img src="https://picsum.photos/200/300?grayscale"></img>
                <div>
                    She has enjoyed working with children in several non-governmental organizations and schools. Her work is also extended to young adults and adults through her private practice. Additionally, she is a certified Dance Movement Therapy practitioner who incorporates various elements of expressive arts to her practice. 
                    She aspires to facilitate a deeper understanding of emotions and mental processes by providing a relational and creative therapeutic space. 
                </div>
            </div>

            <div className='card abtus'>        
                <div>
                    Khushnuma is a practicing psychotherapist and a clinical psychologist, registered with RCI (Rehabilitation Council of India) since 3 years. 
                    She has had an experience of working as a Psycho-oncologist for 2 years at a cancer setup in Vadodara. Along with various mental health concerns/disorders, she has also been keen in working with individuals as well as the families of those suffering from diseases such as cancer and helping in management of the emotional and psychological aspects of the same. 
                    She uses an eclectic approach of psychotherapy with inclination towards psychodynamic and existential schools of psychotherapy. She intends to go beyond just the symptom management and provide a space for personal as well as relational growth.
                </div>
            </div>
        </div>  
    )
        };
}

export default Aboutus;