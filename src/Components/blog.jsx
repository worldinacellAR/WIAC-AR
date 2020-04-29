import React, { Component } from "react";
import { Card, ListGroup, Carousel } from "react-bootstrap";
import "../CSS/about.css";
import usc_logo from "../Files/usc_games.png";
import bg_gradient from "../Files/angryimg.png";
import { MDBCol, MDBFooter, MDBContainer, MDBRow } from "mdbreact";
import "../CSS/blog.css";

class Blog extends Component {
  state = {};
  render() {
    return (
      <div className="bg_img_blog">
        <Card
          style={{
            textAlign: "center",
            backgroundImage: `url(${bg_gradient})`,
            fontFamily: "Permanent Marker, cursive",
          }}
        >
          <Card.Title>BLOG</Card.Title>
        </Card>
        <Card
          style={{
            marginTop: "2rem",
            marginLeft: "18rem",
            marginRight: "18rem",
          }}
          bg="light"
          text="dark"
          border="secondary"
        >
          <Card.Header className="card_title text-danger">
            Project Start <br />
            Thursday, February 6th 2020
          </Card.Header>
          <Card.Body>
            <Card.Text className="card_font">
              We are a group of five working for the World in a cell project
              which is in collaboration with the USC school of Cinematic Arts
              and with the Bridge Institute, to create a fully experiential
              virtual world of a single Pancreatic Beta Cell. This meetup
              involved clearing what goals were expected of us to achieve. We
              interacted with Bryan, the coordinator for us and the World
              Building Media Lab (WBML) team. We were expected to produce an
              interactive AR experience for interacting with various proteins
              using Enklu. Enklu is an all-in-world platform used to create,
              play and share mixed reality. We decided to meet twice a week and
              work together as our deadline was to produce this by 13th March,
              where this project could be showcased at the South By Southwest
              festival. We were given 2 HoloLens and we divided the work between
              us. The work involved learning how to network Enklu with the
              HoloLens, and how to work with the Javascript API which meant how
              could the prefabs (developed on the Unity platform) with Enklu.
              The goal for the next meeting was to produce a playable prototype
              on the screen.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            marginTop: "1rem",
            marginLeft: "18rem",
            marginRight: "18rem",
          }}
          bg="light"
          text="dark"
          border="secondary"
        >
          <Card.Header className="card_title text-danger">
            Meetup <br />
            Monday, February 10th 2020
          </Card.Header>
          <Card.Body>
            <Card.Text className="card_font">
              We are a group of five working for the World in a cell project
              which is in collaboration with the USC school of Cinematic Arts
              and with the Bridge Institute, to create a fully experiential
              virtual world of a single Pancreatic Beta Cell. This meetup
              involved clearing what goals were expected of us to achieve. We
              interacted with Bryan, the coordinator for us and the World
              Building Media Lab (WBML) team. We were expected to produce an
              interactive AR experience for interacting with various proteins
              using Enklu. Enklu is an all-in-world platform used to create,
              play and share mixed reality. We decided to meet twice a week and
              work together as our deadline was to produce this by 13th March,
              where this project could be showcased at the South By Southwest
              festival. We were given 2 HoloLens and we divided the work between
              us. The work involved learning how to network Enklu with the
              HoloLens, and how to work with the Javascript API which meant how
              could the prefabs (developed on the Unity platform) with Enklu.
              The goal for the next meeting was to produce a playable prototype
              on the screen.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            marginTop: "1rem",
            marginLeft: "18rem",
            marginRight: "18rem",
          }}
          bg="light"
          text="dark"
          border="secondary"
        >
          <Card.Header className="card_title text-danger">
            Meetup <br />
            Wednesday, February 12th 2020.
          </Card.Header>
          <Card.Body>
            <Card.Text className="card_font">
              This session involved building a simple demo for tomorrow’s class
              meeting. We were successfully able to interact with the Enklu
              editor via the HoloLens. Nivi was able to place a Rhino onto the
              editing screen ;). Simultaneously, some of us worked on how to
              position the menu, and decided to make the menu follow the player
              as they walk. In this case, the rhino was the menu substitute. We
              also added a feature to hide/show a protein asset in action. (This
              idea would be more clear with more meetings with the WBML team and
              what they want to do).
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            marginTop: "1rem",
            marginLeft: "18rem",
            marginRight: "18rem",
          }}
          bg="light"
          text="dark"
          border="secondary"
        >
          <Card.Header className="card_title text-danger">
            Meetup <br />
            Thursday, February 13th 2020.
          </Card.Header>
          <Card.Body>
            <Card.Text className="card_font">
              This session involved meeting with professor Vangelis to show our
              progress. We showcased our little demo to the professor and the
              professor was going to introduce us to one of the engineers
              working at Enklu as well as facilitate project requests. We also
              met up with Edwin, our TA, to discuss about FMOD sound format and
              how we can export/import into Enklu
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            marginTop: "1rem",
            marginLeft: "18rem",
            marginRight: "18rem",
          }}
          bg="light"
          text="dark"
          border="secondary"
        >
          <Card.Header className="card_title text-danger">
            Meetup <br />
            Monday, February 17th 2020
          </Card.Header>
          <Card.Body>
            <Card.Text className="card_font">
              We decided to split up the tasks to implement potential individual
              components for the project Touch Function We were able to trigger
              touch function on the 3D plants, but not the animals. However, we
              thought of utilizing 2D assets for menus and the touch function
              did not work.
              <br />
              <b>Animation of the Protein:</b> <br />
              It turned out that the animation was an inbuilt operation in some
              of the protein prefabs and thus importing the required protein
              form the Unity would work directly. We just had to trigger the
              required animation.
              <br /> <b>Math Transform</b>
              <br /> We were able to transform the position of a sample protein,
              making it revolve in a circular path. FMOD The format was not
              available in the documentation. <br />
              <b>Multiplayer and Anchoring</b> <br />
              In multiplayer mode, we had to set up anchors in relation to the
              primary anchor generated by the room's mesh scanned. We had no
              luck in this department. So in order to efficiently resolve
              pending issues, we compiled a list of questions to be asked for
              the forthcoming meeting with team Enklu.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            marginTop: "1rem",
            marginLeft: "18rem",
            marginRight: "18rem",
          }}
          bg="light"
          text="dark"
          border="secondary"
        >
          <Card.Header className="card_title text-danger">
            Meetup <br />
            Wednesday, February 19th 2020
          </Card.Header>
          <Card.Body>
            <Card.Text className="card_font">
              We had a video call conference with one of the Enklu’s engineers,
              James. He gave us a hands on session on the various API’s. He also
              gave us a channel for further communication and help. The
              questions were cleared and compiled in our reference
              documentation. James suggested we use a message passing paradigm
              to make our code more modular and clear. It also turned out that
              the sound FMOD libraries did not integrate with Enklu, hence we
              will have to re-generate raw sound files to import into Enklu. We
              cleared up the 2D object touch issue. It wasn’t working because
              the asset needed a collider in order for us to be able to interact
              with it. So we were able to implement touching an asset to toggle
              other asset’s visibility. As for the multiplayer setup, it was
              still not working. After the call, we cleaned up our code by using
              messaging system (broadcast and listen) instead of saving an asset
              reference to an object as var and turned them modular by splitting
              the code into scripts into Animate, Sound, Menu Item (Touch),
              Protein (toggle show/hide), Proximity, Math Path (goes in a
              circle).
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            marginTop: "1rem",
            marginLeft: "18rem",
            marginRight: "18rem",
          }}
          bg="light"
          text="dark"
          border="secondary"
        >
          <Card.Header className="card_title text-danger">
            Meetup <br />
            Monday, February 24th 2020
          </Card.Header>
          <Card.Body>
            <Card.Text className="card_font">
              We started off with a meeting briefing Sharleen, one of the team’s
              designers, with what we could work with on Enklu to build the UI
              so that UI design would stay within Enklu’s capacities while we
              wait for the finalized design. We were also told to give a demo
              session to the WBML team on the following day where they were
              expected to see a working prototype. Bryan provided us with simple
              shapes with a collider from Unity for us to test and we were able
              to generate spatial sound from Unity. Both assets were
              successfully imported into Enklu however, the collider wasn’t
              working. While one teammate remained on Unity prefab task, the
              rest of us explored on gaze function, gestures, generating assets
              from JavaScript (for tossing multiple proteins into play space),
              and multiplayer setup. We had a minor mishap when we accidentally
              deleted a world anchor during our multiplayer setup experience. It
              was then that we realized the lack of ‘undo’ feature so we had to
              rebuild from scratch. Luckily all our assets and scripts were
              preserved in the project library. For tomorrow’s demon, our
              prototype ended up including a sphere and a cube as touch objects
              to toggle one protein's visibility and the other spinning motion.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            marginTop: "1rem",
            marginLeft: "18rem",
            marginRight: "18rem",
          }}
          bg="light"
          text="dark"
          border="secondary"
        >
          <Card.Header className="card_title text-danger">
            WBML Demo <br />
            Tuesday, February 25th 2020
          </Card.Header>
          <Card.Body>
            <Card.Text className="card_font">
              Nivi was our representative for the demo. It seems there was mixed
              feedback. Comments such as “the screen view are too small so the
              objects look cut-off”, “why do they have to interact with the
              object with a pointed finger”, and “why do they have to walk to
              the object to interact with it.” were raised. While some of these
              issues pertained to HoloLens limitations, some were related to UI
              design, which we have already explored the options to make sure
              that they work in preparation for the actual UI from the design
              team.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            marginTop: "1rem",
            marginLeft: "18rem",
            marginRight: "18rem",
          }}
          bg="light"
          text="dark"
          border="secondary"
        >
          <Card.Header className="card_title text-danger">
            Meetup <br />
            Wednesday, February 26th 2020
          </Card.Header>
          <Card.Body>
            <Card.Text className="card_font">
              Today we finally got the multiplayer setup to work, in a slightly
              lopsided way. The planes were tilted, so we still have to figure
              out why. We also successfully imported Unity assets with a proper
              collider where you can interact with the hand instead of just one
              finger. On the interactive side, we were able to implement an
              object to follow the hand gesture. Later, we will add scaling so
              that the player can move the object on a 2D plane similar to
              Enklu’s editor (which is what the original design team hoped for).
              We will also explore the function to toss the proteins onto the
              play space using a flicking motion. For debugging purposes, we
              were able to add a text log onto the screen. We also tested the
              multiplayer menu feature, in which each player should have their
              own menu, and it seems to work properly (we can’t confirm for sure
              due to the lopsided world). Other functionality that we have
              attempted and are still facing issues with include creating assets
              using JavaScript, Gaze function, and Unity particle system (to
              create the glow effect). We also communicated to Colleen on
              pending matters from the design team mainly regarding sound assets
              and UI design and worked on our design document and blog
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            marginTop: "1rem",
            marginLeft: "18rem",
            marginRight: "18rem",
          }}
          bg="light"
          text="dark"
          border="secondary"
        >
          <Card.Header className="card_title text-danger">
            Meetup <br />
            Thursday, February 27th 2020
          </Card.Header>
          <Card.Body>
            <Card.Text className="card_font">
              First meeting with Brian the sound team, Dick the new project
              manager, and Alex. We tried to narrow down the scope and came up
              with a semi-finalized list, keeping in mind that our play space is
              only a 3.5’ diameter round table. The idea is for the proteins to
              behave like particles and spiral towards the center. If protein
              belongs to the same group, it will create a special effect like a
              flash then bind and after x amount of time the protein will
              disappear. Each player can throw in whatever protein to affect
              existing ones in the playspace and cannot interact directly inside
              the playspace (like billard). As for the menu, we will have to
              wait for the design team. Brian will design the sounds along the
              line of Bloom app concept. Sound is being designed.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            marginTop: "1rem",
            marginLeft: "18rem",
            marginRight: "18rem",
          }}
          bg="light"
          text="dark"
          border="secondary"
        >
          <Card.Header className="card_title text-danger">
            Meetup <br />
            Friday, February 28th 2020
          </Card.Header>
          <Card.Body>
            <Card.Text className="card_font">
              MAJOR SHIFT TO UNITY!!! <br></br>After facing issues on Enklu on
              multiplayer anchoring and the concept has changed from a static
              gameplay to a dynamic one, professor Vangelis and Dick decided to
              shift the platform to Unity. And finally, our finalized scope! The
              menu concept was scrapped, instead, the proteins will fall from
              the sky and bounce in front of each player (4 players) and the
              players can tap/push them into the playspace. For the delay time,
              there will be a 10 sec delay after the player throws the protein
              in and each protein will last for 30 sec unless combined then the
              timer resets. Sound will begin when the protein falls from the
              sky. There will be two types of collision sound, positive (match)
              and negative (mismatch). WIAC team also requested a demo for Alex
              upcoming Thursday.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            marginTop: "1rem",
            marginLeft: "18rem",
            marginRight: "18rem",
          }}
          bg="light"
          text="dark"
          border="secondary"
        >
          <Card.Header className="card_title text-danger">
            Meetup <br />
            Monday, March 2nd 2020
          </Card.Header>
          <Card.Body>
            <Card.Text className="card_font">
              With a major shift in platform, there’s a lot of work to be done
              for the demo on Thursday. So we worked on quite a few
              functionalities today. We were able to spawn proteins from 4 cubes
              (players), use Unity particle system for proteins to collide, bind
              the proteins if they belong to the same group, set up Git repo,
              and imported most assets (just missing one). We wanted to use
              Unity cloud, but did not have enough “free” seats. We also tested
              MRTK for single player and it was working fine. After Dick viewed
              our rough build, we no longer needed vfx when proteins combine or
              switch out to combo bake prefabs, just single ones sticking
              together under Unity physics is fine.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            marginTop: "1rem",
            marginLeft: "18rem",
            marginRight: "18rem",
          }}
          bg="light"
          text="dark"
          border="secondary"
        >
          <Card.Header className="card_title text-danger">
            Meetup <br />
            Tuesday, March 3rd 2020
          </Card.Header>
          <Card.Body>
            <Card.Text className="card_font">
              We continued to work on the multiplayer aspect of the experience
              and were able to track and spawn proteins for the 4 players under
              one HoloLens, which will need to be split up to individual
              HoloLens later.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            marginTop: "1rem",
            marginLeft: "18rem",
            marginRight: "18rem",
          }}
          bg="light"
          text="dark"
          border="secondary"
        >
          <Card.Header className="card_title text-danger">
            Meetup <br />
            Wednesday, March 4th 2020
          </Card.Header>
          <Card.Body>
            <Card.Text className="card_font">
              Sharleen requested us to put together a demo for Alex tomorrow so
              we had to fix up a couple of features. We also discovered that G
              Protein and G Alpha were missing (was replaced by mRNA and
              ribosome) and replaced them. Also because we changed from
              switching out combined protein prefabs to sticking single protein
              prefabs when they bind, we need a way to determine if the proteins
              have formed a group. We fixed this by adding proteins that formed
              a group into a folder (gameObject). We also fine tuned protein
              velocity and fixed random gen to cycle through all proteins before
              spawning the same ones again.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            marginTop: "1rem",
            marginLeft: "18rem",
            marginRight: "18rem",
          }}
          bg="light"
          text="dark"
          border="secondary"
        >
          <Card.Header className="card_title text-danger">
            Meetup <br />
            Thursday, March 5th 2020
          </Card.Header>
          <Card.Body>
            <Card.Text className="card_font">
              Demo day! <br />
              Alex, Helen, Dick, Bryan, and Theo viewed our demo (single player)
              and provided some feedback. The demo included 4 proteins falling
              from the sky and they were scripted to be pushed into the
              playspace where they interacted. Our lead biologist Helen seemed
              pleased, so that’s good news for us. Overall it was a positive
              experience with some minor adjustments regarding the protein
              sizes, blue ones need to be smaller. Alex wanted the protein size
              to be larger and shrinks as it gets pushed into the playspace. The
              proteins were also bouncing too fast, they should behave like
              balloons. We continued our development on multiplayer and realized
              that the school’s network doesn’t allow us to connect multiple
              HoloLens on the same network. Need some sort of workaround, so we
              proposed using our own (WIAC’s) router since we may face the same
              issue at SXSW.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            marginTop: "1rem",
            marginLeft: "18rem",
            marginRight: "18rem",
          }}
          bg="light"
          text="dark"
          border="secondary"
        >
          <Card.Header className="card_title text-danger">
            Meetup <br />
            Monday, March 9th 2020
          </Card.Header>
          <Card.Body>
            <Card.Text className="card_font">
              Corona effect hits town. <br />
              SXSW event was cancelled. Despite the news, our work doesn’t stop
              here. Multiplayer work never ends, we can now see the same
              proteins and playspace, but it's off by some strange offset
              instead of the exact same location. We also started exploring
              touch features under Unity and incorporated sounds into our
              protein prefabs and worked on dissolving the proteins upon
              destruction effect on another development branch. Then the rest of
              the time was spent on our midterm assignment, video and
              documentations
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            marginTop: "1rem",
            marginLeft: "18rem",
            marginRight: "18rem",
          }}
          bg="light"
          text="dark"
          border="secondary"
        >
          <Card.Header className="card_title text-danger">
            Meetup <br />
            Tuesday, March 10th 2020
          </Card.Header>
          <Card.Body>
            <Card.Text className="card_font">
              A short call with Dick to update on the project status.
              Potentially asking for assistance with HoloLens multiplayer.
              <br /> We continue to tackle the multiplayer player aspect. Touch
              feature is now working on a different development branch with an
              independent script. It was able to log the position of the finger.
              On the sound branch, we attached sounds to protein prefabs and
              were able to play when triggered. Note to self, spawning sound
              needs to be incorporated to the protein manager to trigger it.
              Later in the night, we continued to work on our midterm
              deliverables.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            marginTop: "1rem",
            marginLeft: "18rem",
            marginRight: "18rem",
          }}
          bg="light"
          text="dark"
          border="secondary"
        >
          <Card.Header className="card_title text-danger">
            Meetup <br />
            Wednesday, March 11th 2020
          </Card.Header>
          <Card.Body>
            <Card.Text className="card_font">
              Our multiplayer finally worked. Players can see the same protein
              but diff coordinates, again with the offset. Touch protein is also
              working using an unconventional method of attaching a cube to the
              player’s finger position to collide with the proteins. For sounds,
              we received the new sound files from Brian and incorporated them
              into our protein prefabs. The rest of the time we spent working on
              our midterm video.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            marginTop: "1rem",
            marginLeft: "18rem",
            marginRight: "18rem",
          }}
          bg="light"
          text="dark"
          border="secondary"
        >
          <Card.Header className="card_title text-danger">
            Meetup <br />
            Thursday, March 12th 2020
          </Card.Header>
          <Card.Body>
            <Card.Text className="card_font">
              We got the multiplayer positioning to work. Two players tested are
              in sync with some bug related to jittery visuals that needs to be
              investigated.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            marginTop: "1rem",
            marginLeft: "18rem",
            marginRight: "18rem",
          }}
          bg="light"
          text="dark"
          border="secondary"
        >
          <Card.Header className="card_title text-danger">
            Call Meeting <br />
            Wednesday, March 25th 2020
          </Card.Header>
          <Card.Body>
            <Card.Text className="card_font">
              Welcome back! Housebound spring break, flights and trips were
              cancelled over the week due to Corona. With a greenlit from
              professor Vangelis and Corona restrictions still in place, we had
              a call with him today at 1pm to update our project status and how
              we’re planning to proceed working remotely. Putting everything
              together. We cleaned up our git repository versions and merged
              touch into our main development branch.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            marginTop: "1rem",
            marginLeft: "18rem",
            marginRight: "18rem",
          }}
          bg="light"
          text="dark"
          border="secondary"
        >
          <Card.Header className="card_title text-danger">
            Call Meeting <br />
            Monday, March 30th 2020
          </Card.Header>
          <Card.Body>
            <Card.Text className="card_font">
              Dick left our project and Colleen is now the team contact point.
              We had a short call to update on our project status and plan for
              the rest of the semester. Colleen suggested having a blog and
              videos to showcase how we overcome issues with remote development.
              We also brainstorm on how we can show our demo. Option one is to
              explore a simple method to deploy our project so that Alex himself
              can launch. Option two is for Bryan to compile and launch the
              project, since he is a Unity expert. In any case, we have to
              figure out how to distribute the HoloLens.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            marginTop: "1rem",
            marginLeft: "18rem",
            marginRight: "18rem",
          }}
          bg="light"
          text="dark"
          border="secondary"
        >
          <Card.Header className="card_title text-danger">
            Call Meeting <br />
            Wednesday, April 1st 2020
          </Card.Header>
          <Card.Body>
            <Card.Text className="card_font">
              We had a call with Brian, the team member from WIAC responsible
              for Sounds, to clarify how the sound file structure works for our
              gameplay. We concluded that we apply sounds from the same cord
              1st, 3rd, 5th, octave up (i.e. AC#E) for proteins in the same
              group (probably not the 7th note). In addition, we have mono and
              stereo collision sound, positive and negative. Stereo sound is
              meant for the player (camera) and mono is for attaching to the
              proteins floating in space. These are two different approaches
              that we have to experiment and see how it pans out in HoloLens.
              Brian recommended that we don’t use HoloLens API to manage sound
              or modify the sound pitch via Unity interface.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            marginTop: "1rem",
            marginLeft: "18rem",
            marginRight: "18rem",
          }}
          bg="light"
          text="dark"
          border="secondary"
        >
          <Card.Header className="card_title text-danger">
            Call Meeting <br />
            Thursday, April 2nd 2020
          </Card.Header>
          <Card.Body>
            <Card.Text className="card_font">
              All components have been merged into the same development branch.
              We still need to tie up our loose ends including spawning sound,
              collision sound, non-host player touching the proteins, proteins
              spawning at non-host position, and sound fading out as the protein
              destroys itself as well as cleaning up any bugs for Saturday
              testing. How we can test the multiplayer aspect is yet to be
              decided due to the current scenario.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            marginTop: "1rem",
            marginLeft: "18rem",
            marginRight: "18rem",
          }}
          bg="light"
          text="dark"
          border="secondary"
        >
          <Card.Header className="card_title text-danger">
            Call Meeting <br />
            Saturday, April 4th 2020
          </Card.Header>
          <Card.Body>
            <Card.Text className="card_font">
              We had a short discussion on what and how we are going to demo the
              multiplayer aspect of our AR experience. On the development side,
              we cleaned up all our loose ends and added the sound fading effect
              when the protein gets destroyed so that its sound doesn’t just
              abruptly end.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            marginTop: "1rem",
            marginLeft: "18rem",
            marginRight: "18rem",
          }}
          bg="light"
          text="dark"
          border="secondary"
        >
          <Card.Header className="card_title text-danger">
            Call Meeting <br />
            Tuesday, April 7th 2020
          </Card.Header>
          <Card.Body>
            <Card.Text className="card_font">
              We have our weekly call with Colleen. This time including Brian
              and Bryan. After further clarification on how the sounds groups,
              we decided to go with the chords from option 1: <br />
              Group 1: GAC#E oct <br />
              Group 2: BD#F# <br />
              Group 3: AC#E <br />
              Confirmation: 1,2,5 <br />
              Disconfirmation: 1,3,4 <br />
              So we changed up the protein and collision sounds and added
              spawning sound to the player (not the protein). Colleen also wants
              a few videos to show to the rest of the WIAC team for feedback.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            marginTop: "1rem",
            marginLeft: "18rem",
            marginRight: "18rem",
          }}
          bg="light"
          text="dark"
          border="secondary"
        >
          <Card.Header className="card_title text-danger">
            Call Meeting <br />
            Wednesday, April 9th 2020
          </Card.Header>
          <Card.Body>
            <Card.Text className="card_font">
              A call with professor Vangelis to update on our progress and
              explore a way to smooth out touch features.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            marginTop: "1rem",
            marginLeft: "18rem",
            marginRight: "18rem",
          }}
          bg="light"
          text="dark"
          border="secondary"
        >
          <Card.Header className="card_title text-danger">
            Call Meeting <br />
            Friday, April 10th 2020
          </Card.Header>
          <Card.Body>
            <Card.Text className="card_font">
              We discovered a bug where the proteins weren’t being destroyed.
              Turns out git doesn’t resolve letter case file naming. The file
              was updated from “dissolve.cs” to “Dissolve.cs”, but after the
              code was pushed, it remained as “dissolve.cs”. Later in the day,
              we recorded a few videos for WIAC and the professor.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            marginTop: "1rem",
            marginLeft: "18rem",
            marginRight: "18rem",
          }}
          bg="light"
          text="dark"
          border="secondary"
        >
          <Card.Header className="card_title text-danger">
            Call Meeting <br />
            Tuesday, April 14th 2020
          </Card.Header>
          <Card.Body>
            <Card.Text className="card_font">
              Weekly call with Colleen. Our currently outstanding issue is still
              on the smoothness of the multiplayer experience. We brought up the
              issue of the current build that there’s no visual feedback and
              brainstormed on adding sparkles or bubbles around the binded
              protein effects.
              <br /> We had a short team call after discussing what we want to
              add on to the project. Where the project stands now, it seems to
              lack in visual confirmation when the proteins collide or bind.
              We’re considering adding collision and binded protein visual
              effects. Bubbles were vetoed, so sparkle it is!
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            marginTop: "1rem",
            marginLeft: "18rem",
            marginRight: "18rem",
          }}
          bg="light"
          text="dark"
          border="secondary"
        >
          <Card.Header className="card_title text-danger">
            Call Meeting <br />
            Wednesday, April 15th 2020
          </Card.Header>
          <Card.Body>
            <Card.Text className="card_font">
              Still on multiplayer bug that causes jitter in the guest players.
              This time is when a non-host player taps the proteins into the
              playspace. Turns out the touch feature had zero velocity from the
              finger cube’s rigidbody. Since the host controls everything, we
              need to send this velocity tap to the host somehow. We solved this
              by using the collided protein’s velocity to pass to the host
              instead. A few ideas were thrown around to improve the current
              project. How do we know when the game starts? When it ends? Should
              we add a timer to turn it into a game? In the end, if multiplayer
              hasn’t been sorted out, we shouldn’t add more functionalities on
              top. We still need to adjust the speed and scale to improve the
              visual aesthetic of the experience.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            marginTop: "1rem",
            marginLeft: "18rem",
            marginRight: "18rem",
          }}
          bg="light"
          text="dark"
          border="secondary"
        >
          <Card.Header className="card_title text-danger">
            Call Meeting <br />
            Thursday, April 16th 2020
          </Card.Header>
          <Card.Body>
            <Card.Text className="card_font">
              Today we just worked on the short videos for submission.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            marginTop: "1rem",
            marginLeft: "18rem",
            marginRight: "18rem",
          }}
          bg="light"
          text="dark"
          border="secondary"
        >
          <Card.Header className="card_title text-danger">
            Call Meeting <br />
            Friday, April 17th 2020
          </Card.Header>
          <Card.Body>
            <Card.Text className="card_font">
              Yet another attempt on the multiplayer. Even Though it's working,
              we couldn’t let the jitter bug slide.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            marginTop: "1rem",
            marginLeft: "18rem",
            marginRight: "18rem",
          }}
          bg="light"
          text="dark"
          border="secondary"
        >
          <Card.Header className="card_title text-danger">
            Call Meeting <br />
            Saturday, April 18th 2020
          </Card.Header>
          <Card.Body>
            <Card.Text className="card_font">
              More attempts on multiplayer, this time on a different network.
              Hololens were dropped off at different teammates’s houses.
              However, we weren’t able to connect to the server. By the end of
              the day, we still couldn’t figure out what had happened. So we
              will revert back to the old network for our next testing.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            marginTop: "1rem",
            marginLeft: "18rem",
            marginRight: "18rem",
            marginBottom: "1rem",
          }}
          bg="light"
          text="dark"
          border="secondary"
        >
          <Card.Header className="card_title text-danger">
            Call Meeting <br />
            Tuesday, April 21st 2020
          </Card.Header>
          <Card.Body>
            <Card.Text className="card_font">
              Weekly call with Colleen, Brian, and Bryan. Today we discussed
              wrapping up the project within next week. The WIAC team wants us a
              specified design documentation which showcases our project
              description, technologies used, gameplay structure, and the steps
              taken up to set up the project. Colleen also suggested picking up
              the HoloLens from the teammates. Brian talked about how he added
              new soundtracks and how we could try and incorporate those into
              our current project. The jitter-bug still exists and we are still
              trying to figure out how we should resolve it. In the routine
              group meeting, we discussed adding visual effects to the existing
              proteins. This means that we would implement sparkles. We will be
              discussing about the sparkle asset with Prof. Vangelis tomorrow.
              We discussed how to create a website for our project and whether
              we would be making a poster for our project or not.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            marginTop: "1rem",
            marginLeft: "18rem",
            marginRight: "18rem",
            marginBottom: "1rem",
          }}
          bg="light"
          text="dark"
          border="secondary"
        >
          <Card.Header className="card_title text-danger">
            Call Meeting <br />
            Friday, April 24th 2020
          </Card.Header>
          <Card.Body>
            <Card.Text className="card_font">
              This was the final call meeting with the professor Vangelis. This
              meeting was about touching up and cleaning up the gameplay and the
              overall experience. Professor recommended us to use the single
              protein in the centre of the playspace and smack the other
              proteins to hit the centered protein to make the experience more
              like a game. We then suggested having floor space instead and to
              thus eliminate the cylindrical wireframe. As discussed with
              Colleen, we had decided to use sparkles when the two proteins
              collided. Professor wanted us to visualize the actual reaction of
              the proteins and what would happen in real time and then suggested
              replacing the sparkles. We suggested using the force field asset
              to show the protein interaction.
            </Card.Text>
          </Card.Body>
        </Card>
        <MDBFooter className="font-small">
          <MDBContainer fluid className="text-center"></MDBContainer>
          <div className="footer-copyright text-center bg_footer">
            <MDBContainer fluid>
              <br />
              &copy;
              {"Spring 2020 CSCI 538 Augmented, Virtual, and Mixed Reality"}
              <img src={usc_logo} width="200" height="50"></img>
            </MDBContainer>
          </div>
        </MDBFooter>
      </div>
    );
  }
}

export default Blog;
