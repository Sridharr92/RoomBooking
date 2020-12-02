import React,{Component} from 'react';

class RoomBooking extends Component{
    constructor(){
        super()
        this.state = {
            room:1,
            adult:1,
            children:0,
            people :1,
            roomDecDisabled:true,
        }
        this.IncresRooms = this.IncresRooms.bind(this)
        this.DecreaseRooms = this.DecreaseRooms.bind(this)
        this.IncresAdults = this.IncresAdults.bind(this)
        this.DecreaseAdults = this.DecreaseAdults.bind(this)
        this.DecreaseChildren = this.DecreaseChildren.bind(this)
        this.IncresChildren = this.IncresChildren.bind(this)
    }
    
    IncresRooms = () => {
        if(this.state.room < 5){
            this.setState({
                roomDecDisabled : false,
                room:++this.state.room
            })
            if(this.state.room > this.state.adult){
                this.setState({
                   adult:++this.state.adult
                })
            }
        }
    }
    DecreaseRooms= () =>{
        if(this.state.room > 1){
            this.setState({
                room:--this.state.room         
            })
            let people = this.state.adult + this.state.children
            let subs
            if((people/4) > this.state.room){
                let subs = people - (this.state.room * 4);
                this.setState({
                    children:this.state.children - subs 
                })
            }
            else{
                this.setState({
                    adult:this.state.adult - (subs - this.state.children),
                    children:0
                })
            }
        }else{
            this.setState({
                roomDecDisabled : true,
            })
        }
    }
    IncresAdults= () =>{
        if(this.state.people < 20){
            let people = this.state.adult + this.state.children;
            this.setState({
                adult:++this.state.adult,
                people:++people
            })
            if((people/4) > this.state.room){
                this.IncresRooms()
            }
        }        
    }
    DecreaseAdults= () =>{
        if(this.state.adult > 1){
            this.setState({
                adult:--this.state.adult
            })
            if(this.state.adult < this.state.room){
                this.DecreaseRooms();
            }
        }     
    }
    IncresChildren= () =>{
        let people = this.state.adult + this.state.children;
        if(people < 20){
            this.setState({
                children:++this.state.children,
                people:++people
            }) 
            if((people/4) > this.state.room){
                this.IncresRooms();
            }
        }
    }
    DecreaseChildren= () =>{
        if(this.state.children > 0){
            this.setState({
                children:--this.state.children,
                children:0
            })
        }
    }
    render(){
        return(
            <div>
                <h2 className="text-center"><i class="fa fa-users pr-2" aria-hidden="true"></i>Choose Number of <strong>People</strong></h2>
                <div className="border w-50 mx-auto">
                    <div className="d-flex align-items-center justify-content-between border p-4">
                        <div className="d-flex align-items-center infodetails">
                            <i className="fa fa-bed fa-2x pr-2" aria-hidden="true"></i> 
                            Rooms
                        </div>
                        <div className="d-flex align-items-center">
                            <button onClick={this.DecreaseRooms} className="sub"><i class="fa fa-minus" aria-hidden="true"></i></button>                        
                            <h2>{ this.state.room }</h2>    
                            <button onClick={this.IncresRooms} className="plus"><i class="fa fa-plus" aria-hidden="true"></i></button>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between border p-4">
                        <div className="d-flex align-items-center infodetails">
                            <i className="fa fa-child fa-2x pr-2" aria-hidden="true"></i>Adults
                        </div>
                        <div className="d-flex align-items-center">
                            <button onClick={this.DecreaseAdults} className="sub"><i class="fa fa-minus" aria-hidden="true"></i></button>                      
                            <h2>{ this.state.adult}</h2>
                            <button onClick={this.IncresAdults} className="plus"><i class="fa fa-plus" aria-hidden="true"></i></button>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between border p-4">
                        <div className="d-flex align-items-center infodetails">
                             <i className="fa fa-user fa-2x pr-2" aria-hidden="true"></i>Children 
                        </div>
                        <div className="d-flex align-items-center">
                            <button onClick={this.DecreaseChildren} className="sub"><i class="fa fa-minus" aria-hidden="true"></i></button>                      
                            <h2>{ this.state.children}</h2>
                            <button onClick={this.IncresChildren} className="plus"><i class="fa fa-plus" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default RoomBooking;