window.READINESS = {
  "modules": [
    {
      "id": "files",
      "title": "Files & project handoff",
      "kind": "Shared foundation",
      "goal": "Save, reopen, and share a working project with its audio files intact.",
      "skills": [
        "Distinguish a project/session from an exported audio file.",
        "Keep media with the project and make a backup.",
        "Reopen a transferred project and check for missing audio."
      ],
      "task": "Create a project, import one audio file, save it with its media, reopen it from another folder, and export a playable audio file.",
      "review": "Practice the full save → reopen → export → listen cycle. Check the project and exported file separately.",
      "basis": "MUS 244 digital data management; MUS 347 computer literacy and DAW workflow.",
      "status": "Specification only",
      "url": null
    },
    {
      "id": "signal",
      "title": "Audio & signal flow",
      "kind": "Shared foundation",
      "goal": "Trace audio from its source to the intended listening or recording destination.",
      "skills": [
        "Identify the input, track, processing, output, and monitoring stages.",
        "Distinguish recording level from listening volume.",
        "Recognize clipping and locate a missing signal."
      ],
      "task": "Draw or explain one input-to-output path and demonstrate a recording with usable level and audible playback.",
      "review": "For a silent track, inspect the source, selected input, track meter, routing, output, and listening device in order.",
      "basis": "MUS 347 explicitly names signal path and basic recording; MUS 324 covers mixers and signal flow.",
      "status": "Specification only",
      "url": null
    },
    {
      "id": "edit",
      "title": "DAW audio fundamentals",
      "kind": "Shared foundation",
      "goal": "Work with audio tracks and make a clean, repeatable basic edit.",
      "skills": [
        "Import audio and use the transport.",
        "Trim, split, move, and fade audio.",
        "Balance two tracks and export the intended range."
      ],
      "task": "Import two audio files, trim their starts, add a fade, balance them, and export a short stereo mix.",
      "review": "Start with a duplicate project. Make one edit at a time, listen at edit boundaries, then check the export.",
      "basis": "MUS 244 recording/audio editing and MUS 347 basic editing.",
      "status": "Specification only",
      "url": null
    },
    {
      "id": "midi",
      "title": "MIDI fundamentals",
      "kind": "Shared foundation",
      "goal": "Distinguish MIDI instructions from audio and use a software instrument.",
      "skills": [
        "Create an instrument/MIDI track.",
        "Enter or record notes and change velocity.",
        "Check the instrument and audio output when notes are silent."
      ],
      "task": "Create a short MIDI phrase, change one note and its velocity, and export the audible result.",
      "review": "Check both the note data and the sound-generating instrument. MIDI notes alone are not a recording of sound.",
      "basis": "MUS 244 MIDI sequencing; MUS 348 external controls and MIDI.",
      "status": "Specification only",
      "url": null
    },
    {
      "id": "logic",
      "title": "Logic transition",
      "kind": "DAW readiness",
      "goal": "Transfer familiar audio skills into the Logic workflow used in MUS 324.",
      "skills": [
        "Choose audio input/output and create an audio track.",
        "Select an input; record, edit, and replay a short passage.",
        "Find channel strips, inserts, sends, and Bounce."
      ],
      "task": "In Logic, record or import a passage, edit with a fade, use one insert and one send, and bounce a stereo file.",
      "review": "Locate the Tracks area, Inspector/channel strip, Mixer, and Bounce command. Rebuild a tiny project you already understand in your usual DAW.",
      "basis": "Logic for MUS 324 confirmed by the Director on October 10, 2026; task is proposed.",
      "status": "Specification only",
      "url": null
    },
    {
      "id": "ableton",
      "title": "Ableton Live transition",
      "kind": "DAW readiness",
      "goal": "Transfer familiar audio skills into the Ableton workflow used in MUS 347.",
      "skills": [
        "Distinguish Session View from Arrangement View.",
        "Import, edit, and fade audio; explain when Warp is enabled.",
        "Find devices, return tracks, routing, and Export Audio/Video."
      ],
      "task": "In Ableton, arrange two audio tracks, check Warp deliberately, add a device and a return send, then export a stereo mix.",
      "review": "Use Arrangement View for the initial linear editing task. Identify Session View so you can explain where clips are playing. Confirm the export range and listen to the result.",
      "basis": "Ableton for MUS 347 confirmed by the Director on October 10, 2026; task is proposed.",
      "status": "Specification only",
      "url": null
    },
    {
      "id": "synth",
      "title": "Synthesis refresher",
      "kind": "Future expansion",
      "goal": "Recall basic sound-shaping concepts before a course that assumes them.",
      "skills": [
        "Explain oscillator, filter, amplitude envelope, and LFO roles.",
        "Distinguish audio-rate sound from a modulation control.",
        "Create and describe a simple sound change."
      ],
      "task": "Make one sustained and one percussive sound, explaining how the envelope and filter change the result.",
      "review": "Change one parameter at a time and describe what you hear. Reuse MUS 244 material before developing additional lessons.",
      "basis": "MUS 244 acoustics/synthesis; MUS 348 componentry. Which skills sampling will require remains undecided.",
      "status": "Specification only",
      "url": null
    },
    {
      "id": "mix-advanced",
      "title": "Advanced mixing readiness",
      "kind": "Example module",
      "goal": "Demonstrate the mixing and processing skills assumed after MUS 347.",
      "skills": [
        "Specific skills to be defined with the instructor."
      ],
      "task": "Instructor to define a practical mixing task and passing criteria.",
      "review": "Learning materials still to be built.",
      "basis": "Illustrative advanced-course example requested by the Director.",
      "status": "Not built",
      "url": null
    },
    {
      "id": "synth-advanced",
      "title": "Advanced synthesis readiness",
      "kind": "Example module",
      "goal": "Demonstrate the synthesis skills assumed after MUS 348.",
      "skills": [
        "Specific skills to be defined with the instructor."
      ],
      "task": "Instructor to define a sound-design task and passing criteria.",
      "review": "Learning materials still to be built.",
      "basis": "Illustrative advanced-course example requested by the Director.",
      "status": "Not built",
      "url": null
    }
  ],
  "courses": [
    {
      "id": "244",
      "code": "MUS 244",
      "title": "Principles of Music Technology",
      "requires": [],
      "modules": [
        "files",
        "signal",
        "edit",
        "midi"
      ],
      "daw": "Choose your DAW",
      "example": false
    },
    {
      "id": "248",
      "code": "MUS 248",
      "title": "AV Concert Recording & Archiving",
      "requires": [
        "244"
      ],
      "modules": [
        "files",
        "signal",
        "edit"
      ],
      "daw": "Confirm with instructor",
      "example": false
    },
    {
      "id": "324",
      "code": "MUS 324",
      "title": "Audio Recording Techniques",
      "requires": [
        "244"
      ],
      "modules": [
        "files",
        "signal",
        "edit",
        "logic"
      ],
      "daw": "Logic",
      "example": false
    },
    {
      "id": "347",
      "code": "MUS 347",
      "title": "Post Production",
      "requires": [
        "244"
      ],
      "modules": [
        "files",
        "signal",
        "edit",
        "ableton"
      ],
      "daw": "Ableton Live",
      "example": false
    },
    {
      "id": "348",
      "code": "MUS 348",
      "title": "Introduction to Music Synthesis",
      "requires": [
        "244"
      ],
      "modules": [
        "files",
        "midi",
        "synth"
      ],
      "daw": "Confirm with instructor",
      "example": false
    },
    {
      "id": "346",
      "code": "MUS 346",
      "title": "Music & Interactive Technology (Max/MSP)",
      "requires": [
        "244"
      ],
      "modules": [
        "files",
        "signal",
        "midi"
      ],
      "daw": "Max/MSP",
      "example": false
    },
    {
      "id": "344",
      "code": "MUS 344",
      "title": "Special Topics",
      "requires": [
        "244"
      ],
      "modules": [
        "files",
        "midi"
      ],
      "daw": "Depends on topic",
      "example": false
    },
    {
      "id": "344-mix",
      "code": "MUS 344",
      "title": "Advanced Mixing & Mastering",
      "requires": [
        "244",
        "347"
      ],
      "modules": [
        "files",
        "signal",
        "edit",
        "mix-advanced"
      ],
      "daw": "Not specified",
      "example": true
    },
    {
      "id": "344-synth",
      "code": "MUS 344",
      "title": "Advanced Synthesis & Sampling",
      "requires": [
        "244",
        "348"
      ],
      "modules": [
        "files",
        "midi",
        "synth",
        "synth-advanced"
      ],
      "daw": "Not specified",
      "example": true
    }
  ],
  "acknowledgment": "For MUS 324 Audio Recording Techniques, the main goal is to create professional-grade recordings of acoustic music performances. In addition to in-class hands-on activities, there will be several recording assignments. The class will suit you well if you have an interest in recording musicians that perform acoustically. (This could be you playing or singing your own music, or it could be friends or fellow students playing chamber music or Jazz.) We will listen to your recordings in class. (This also means that the class won’t be a good fit if you have little interest in recording acoustic music or if you are unwilling to share your productions with class mates.)",
  "history": [
    {
      "id": "128",
      "code": "MUS 128",
      "title": "Fundamentals of Music Theory"
    },
    {
      "id": "133",
      "code": "MUS 133",
      "title": "Theory I"
    },
    {
      "id": "244",
      "code": "MUS 244",
      "title": "Principles of Music Technology"
    },
    {
      "id": "248",
      "code": "MUS 248",
      "title": "AV Concert Recording"
    },
    {
      "id": "324",
      "code": "MUS 324",
      "title": "Audio Recording Techniques"
    },
    {
      "id": "347",
      "code": "MUS 347",
      "title": "Post Production"
    },
    {
      "id": "348",
      "code": "MUS 348",
      "title": "Introduction to Music Synthesis"
    },
    {
      "id": "346",
      "code": "MUS 346",
      "title": "Music & Interactive Technology"
    },
    {
      "id": "344",
      "code": "MUS 344",
      "title": "Special Topics"
    }
  ]
};
