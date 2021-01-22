import {useState} from 'react'

const popover_component= Original =>{
    function Popover_Component(props){
        const [isPopoverOpen, setIsPopoverOpen] = useState(false)

        const handlePopover=() =>{
            setIsPopoverOpen(true)
           
          }


        return(
            <Original {...props}
            setIsPopoverOpen={setIsPopoverOpen}
            isPopoverOpen={isPopoverOpen}
            handlePopover={handlePopover}
           />
        )   
     }
     return Popover_Component
}

export default popover_component