let val = true;
        document.getElementById('contacts').addEventListener('click', function() {
        event.preventDefault();
        document.getElementById('message').style.transform = 'translateX(101%)';
        setTimeout(function() {
            if (val) {
                document.getElementById('message').style.transform = 'translateX(0rem)';
                document.getElementById('message').style.height='10rem';
                document.getElementById('message').style.color="black";
                document.getElementById('message').innerHTML=`
                <h1>Contact</h1>
                <p>
                    Email:sahaj.mauryaa@gmail.com
                    <br>
                    Contact:1234567890
                </p>

                    `;
                val = false;
            } else {
                document.getElementById('message').style.transform = 'translateX(101%)';
                val = true;
            }
        },600);
        });
        let val2=true;
        document.getElementById('about').addEventListener('click', function(event) {
        event.preventDefault();
        console.log(document.getElementById('message').style.transform);
        document.getElementById('message').style.transform = 'translateX(101%)';

    setTimeout(function() {
            if (val2) {
                document.getElementById('message').style.transform = 'translateX(0rem)';
                document.getElementById('message').style.height = '10rem';
                document.getElementById('message').style.color = 'black';
                document.getElementById('message').innerHTML = `
                    <h1>About</h1>
                    <p>
                        A Project for Github Club.
                        <br>
                        Created By Sahaj Maurya.
                    </p>
                `;
                val2 = false;
            }
            else
            {
                document.getElementById('message').style.transform = 'translateX(101%)';
                val2 = true;
            }
            }, 600);
        });
        document.getElementById('value').addEventListener('input', () => {
        if (document.getElementById('value').value.length > 0) {
            document.getElementById('plusContent').style.visibility='visible';
            document.getElementById('plusContent').style.transform='rotate(45deg) scale(1.5)';
            document.getElementById('buttonContainer').style.cursor='pointer';
        }
        else if(document.getElementById('value').value.length == 0){
            document.getElementById('plusContent').style.visibility='hidden';
            document.getElementById('plusContent').style.transform='rotate(0deg)';
            document.getElementById('buttonContainer').style.cursor='';
        }
        });
        function check(Value,DateValue,TimeValue)
        {
            document.getElementById('errorMessage').innerHTML='';
            var Error =document.createElement('div');
            if(DateValue.length==0)
            {
                Error.innerHTML='Add date when the task is to be completed!';
                Error.style.fontSize='1.5rem';
                Error.style.color='beige';
                Error.style.fontWeight='800';
                document.getElementById('errorMessage').append(Error);
                return false
            }
            if(Value.length==0)
            {
                Error.innerHTML='Add a task name!';
                Error.style.fontSize='1.5rem';
                Error.style.color='beige';
                Error.style.fontWeight='800';
                document.getElementById('errorMessage').append(Error);
                return false
            }
            if(TimeValue.length==0)
            {
                Error.innerHTML='Add a time to start the task!';
                Error.style.fontSize='1.5rem';
                Error.style.color='beige';
                Error.style.fontWeight='800';
                document.getElementById('errorMessage').append(Error);
                return false
            }
            return true
        }
        const number=["one","two","three","four","five","six","seven","eight","nine","ten"]
        let countone=0;
        let counttwo=0;
        function create() {
            var info=document.getElementById('value').value;
            var dateval=document.getElementById('dateValue').value;
            var timeval=document.getElementById('timeValue').value;
            if(check(info,dateval,timeval) && countone<4)
            {
                var output = document.createElement('div');
                output.id=`task${countone+1}`;
                output.classList.add(`task${countone+1}`)
                output.innerHTML=`
                        <h1 class="heading">${info}</h1>
                        <p class="dateTime">To be Completed by: ${dateval} ${timeval}</p>
                        <button class="${number[countone]}">Task Completed</button>
                        `;
                const button = output.querySelector('button');
                button.addEventListener('click', function() {
                    button.parentElement.remove();
                    countone-=1
                });
                document.getElementById('taskContainer').append(output)
                countone++;
            }
            else if(check(info,dateval,timeval) && counttwo<4){
                var output = document.createElement('div');
                output.id=`task${counttwo+1}`;
                output.classList.add(`task${counttwo+1}`)
                output.innerHTML=`
                        <h1 class="heading">${info}</h1>
                        <p class="dateTime">To be Completed by: ${dateval} ${timeval}</p>
                        <button id="${number[counttwo]}">Task Completed</button>
                    `;
                const button = output.querySelector('button');
                button.addEventListener('click', function() {
                    button.parentElement.remove();
                    counttwo-=1
                });
                document.getElementById('startedTaskContainer').append(output)
                counttwo++;
            }
        }
