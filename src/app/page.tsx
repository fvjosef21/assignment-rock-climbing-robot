import Image from "next/image";
import climb1 from '../../public/wall-climbing-1.png';
import bear1 from '../../public/taiwan-bear-1.png';
import holds1 from '../../public/climbing-holds-1.png';
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <table>
          <tbody>
            <tr>
              <td style={{ padding: 10 }}>
                <Image
                  src={climb1}
                  alt="Climbing wall logo"
                  width="512"
                  height="512"
                />
              </td>
              <td>
                <h1>Assignment - Rock Climbing Robot</h1>
                <h2>Jacky Baltes <a href="mailto:jacky.baltes@ntnu.edu.tw">jacky.baltes@ntnu.edu.tw</a></h2>\

                <h1>Due Date: 23:59, Friday, 13th June 2025 </h1>
              </td>
            </tr>
          </tbody>
        </table>
        <div>

        </div>

        <h1>Updates</h1>
        <ul>
          <li>Page opened, Friday, 30 May 2025</li>
        </ul>

        <h1>Content</h1>

        <p>The goal of this assignment is to develop a simplified model of a humanoid or
          similar robot that is able to climb a wall.
        </p>

        <p>Recently, climbing or bouldering have seen a huge increase in popularity. Various
          competitions for professional and amateur climbers are being organized and
          many people have taken up the sport.
        </p>

        <p>

        </p>

        <h1>Design of the Climbing Wall</h1>

        <p>
          We simplify the design of the wall to only include three types of hand holds: (down, right, left).
        </p>

        <div>
          <Image
            src={holds1}
            alt="climbing holds used in the simulation"
            layout="intrinsic"
            width="512"
            height="512"
          />
        </div>
        <ol>
          <li>
            Center jug holds (green,yellow,brown): a hold where the hands of the robot can make a solid hold for any angle where the center of mass of the robot is below the hand hold.
          </li>
          <li>
            Left jug holds (red): a hold where the hands of the robot can make a solid hold where the center of mass of the robot is to the right of the hand hold.
          </li>
          <li>
            Right jug holds (blue): a hold where the hands of the robot can make a solid hold where the center of mass of the robot is to the left of the hand hold.
          </li>
        </ol>

        <h1>Robot Design</h1>

        <p>We build a simulation of our robot first using a taiwan bear. I used <a href="www.blender.org">Blender</a>
          to create the model of the robot/actor/agent.
        </p>

        <p>The model of the robot is available in the following github repository: <a href="https://github.com/lgadiego001/rock-climbing-robot.git">lgadiego001/rock-climbing-robot</a></p>
        <Image
          src={bear1}
          alt="Taiwan bear model"
          layout="intrinsic"
          width={512}
          height={512}
        />

        <h1>Climbing</h1>

        <p>
          During climbing, the robot uses three limbs (arms or legs) to anchor itself.
          A limb is anchored onto a hold if its endpoint is within 0.1cm of the position of the hold
          and the limb is in the anchored state.
        </p>

        <p>
          The position and rotation of the body of the robot is defined by the three anchored limbs
          and their current configuration.
        </p>

        <p>We ignore collissions between the robot and the wall or holds. Furthermore, we ignore
          self-collissions of the robot.
        </p>

        <p>
          The anchor points must satisfy the following constraints:
        </p>
        <ol>
          <li>
            The anchor points for the arms must satisfy the hold constraints for the right and left jug holds.
          </li>
          <li>
            The anchor points of the legs can be any type and is independent of the center of mass of the robot.
          </li>
          <li>
            The center of mass of the robot must be inside the triangle spanned by the three anchor points.
          </li>
          ,<li>
            The fourth limb can move from one anchor point to the next as long as the other three limbs are anchored.
          </li>
        </ol>
        
        <h1>Implementation</h1>

        <p>
          Firstly, implement a routine that checks if a configuration of the robot given the wall is a legal configuration or not.
        </p>

        <p>
          Secondly, implement forward and inverse kinematics solvers that move the limbs to the holds.
        </p>

        <p>
          Thirdly, implement a planning algorithm that will make the robot climb up walls.
        </p>

        <h1>Analysis</h1>

        <p>

        </p>

        <h1>Groups</h1>

        <p>
          This is a group assignment. You should have been assigned to your group in class.
          If you have not been assigned to a group, then contact the teaching staff immediately.
        </p>

        <h1>Honesty Declaration</h1>

        <p>
          By submitting an assignment, you claim that your submission is only your own work. 
          This means that you have developed the design, implemented the code, run the experiments, 
          and all other work necessary to complete the assignment by yourself.
        </p>

        <p>
          If you discussed your work with other students, used ChatGPT, or used other sources on the Internet, 
          then you must say so clearly at the beginning of the assignment and in your honesty declaration.
        </p>

        <p>
          You can discuss parts of the assignment with others, but these discussions must be limited 
          sharing ideas on a whiteboard or notepad. If you exchange code/programs/designs or exchange 
          any material via the Internet, then you must say so in your honesty declaration.
        </p>

        <p>
          Fill out the <Link href="/honesty.txt" passHref><a>NTNU Honesty Declaration</a></Link> and 
          add any external sources or help that you used during the assignment.
        </p>
        
        <h1>Submission</h1>
        <p>
          All your files and analysis should go into a directory labelled G_%group_num%_CMP_A2, 
          where %group_num% is your group number.
        </p>

        <p>
          Add a README.txt file into the directory, which shows: (a) what other sources you used 
          apart from the lecture material used in class during your work on the assignment, and 
          (b) how to compile and run your program, and (c) any interesting features and extensions 
          of your assignment.
        </p>

        <p>
          Submit your assignment via email to jacky.baltes@ntnu.edu.tw. You can submit a 
          compressed directory of your source code and analysis directly if the resulting file 
          is less than 2 Megabyte. If the file is larger than create a google drive folder and 
          send me a sharable link to the folder to my email. 
        </p>

        <p>
          Your group will give a demonstration of your work during the third week of June.
        </p>

        {/* <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div> */}
      </main >
  {/* <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div >
  );
}
