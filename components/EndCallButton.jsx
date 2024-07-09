"use client"
import { useCallStateHooks } from '@stream-io/video-react-sdk';
import React from 'react'

const EndCallButton = () => {
    const call = useCall();

    const {useLocalParticipant} = useCallStateHooks();
    const localParticipant = useLocalParticipant();

    const isMeetingOwner = localParticipant &&
        call?.state.createdBy && localParticipant.userId === call.state.createdBy.id;

  return (
    <div>
      
    </div>
  )
}

export default EndCallButton
