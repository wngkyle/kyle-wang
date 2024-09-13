import { useEffect } from "react";
import Trail from "../components/Trail";
import BackButton from "../components/BackButton";

import pp2 from "../assets/pickplace-2.png";
import pp3 from "../assets/pickplace-3.png";
import pp4 from "../assets/pickplace-4.gif";
import pp5 from "../assets/pickplace-5.png";


const title = "Pick-And-Place Robot Controller"
const duration = "April 2023 - May 2023"
const intro = "The objective of this project is to implement a controller that allows the robot to pick up the two red blocks on \
    the table and drop them in the green bowl. The robot used in this project is the Frank-Emika robot, also known as the Panda Robot. \
    It has 7 revolute joints, and its kinematics are shown in the figure below.";
const method = "The controller employed in this project is the resolve rate motion controller. Resolve rate control focuses in the \
    end-effector space where the velocity of the end effector is computed based on its own position in the workspace. Thus, instead of \
    calculating joint commands and generating trajectory in the joint space, all joint velocities will be computed in the end-effector \
    space in this project."
const method_2 = "The inverse Jacobian matrix is used to help convert the desired velocities and acceleration of the end effector \
    into joint velocities of the robot. The inverse Jacobian matrix is a mathematical construct that describes the joints’ relations \
    and robot’s kinematics with respect to a certain frame. This frame can be either the end effector frame or the spatial frame. The \
    inverse Jacobian matrix used in this project will be working in the end-effector frame but oriented like the spatial frame. In \
    doing so, we ensure the gripper is always oriented in the same direction even while the body of the robot may be moving or \
    oriented in a different direction."
const method_3 = "The reason why the resolve rate motion controller is employed is that it produces a higher degree of accuracy \
    and precision compared to joint space generation. In addition, the inverse kinematic function used in joint space generation \
    can become really complicated and hard to derive in this project because we are using a robot with 7 revolute joints. The \
    inverse kinematic function has already become relatively complex when the robot with 2 revolute joints is used. With a \
    robot that has 7 revolute joints, the equations for inverse kinematics will be almost impossible to derive as we need to \
    consider so many different possibilities. However, the resolve rate motion controller comes with some limitations. For \
    instance, the resolve rate controller may not be ideal for tasks that require the robot to apply a specific force or \
    interact with its environment in a more complex way. For tasks like these, an impedance controller might be a better \
    option as it allows robots to behave like a spring."
const method_4 = "A five degree polynomials is used for computing desired positions, velocities, and acceleration. Having a \
    5th-order polynomial with 6 constraints to compute the end effector’s desired positions and velocities greatly improves \
    the stability and accuracy of the controller. This is because we ensure both velocity and acceleration are zero in the \
    starting and ending positions. If linear time interpolation in which only 2 constraints are established is used, constant \
    desired velocity and acceleration will be created, and this can pose potential problems since the robot starts from rest, \
    and we want velocity and acceleration to be zero initially.";


const PickPlace = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top
    }, []);
    return (
        <div className="relative h-screen overflow-visible antialiased">
            <div className="inset-0 bg-fixed bg-cover bg-center bg-img2">
                <BackButton />
                <div className="mx-10 md:mx-14 lg:mx-20">
                    <div className="flex flex-row">
                        <div className="lg:w-1/2">
                            <Trail height={80}>
                                <div />
                            </Trail>
                            <h1 className="text-white/90 text-4xl lg:text-5xl">
                                {title}
                            </h1>
                            <h3 className="mt-2 font-light text-white/80 text-xs lg:text-base">
                               {duration}
                            </h3>
                            <p className="mt-10 text-white">
                                {intro}
                            </p>
                            <p className="mt-10 text-white">
                                {method}
                            </p>
                            <p className="mt-10 text-white">
                                {method_2}
                            </p>
                            <p className="mt-10 text-white">
                                {method_3}
                            </p>
                            <p className="mt-10 text-white">
                                {method_4}
                            </p>
                            
                            <div className="flex flex-col my-10 items-center justify-center lg:hidden">
                                <img src={pp5} width={150} height={150} alt="eVTOL" className="rounded-3xl my-5"/> 
                                <img src={pp4} width={350} height={350} alt="eVTOL" className="rounded-3xl my-5"/> 
                                <img src={pp2} width={350} height={350} alt="eVTOL" className="rounded-3xl my-5"/>
                                <img src={pp3} width={350} height={350} alt="eVTOL" className="rounded-3xl my-5"/>
                            </div>
                        </div>
                        <div className="hidden md:flex-col lg:flex w-1/2 mt-32 items-center">
                            <Trail height={80}>
                                <div />
                            </Trail>
                            <img src={pp5} width={150} height={150} alt="eVTOL" className="rounded-3xl my-5"/>
                            <img src={pp4} width={450} height={450} alt="eVTOL" className="rounded-3xl my-5"/>
                            <img src={pp2} width={450} height={450} alt="eVTOL" className="rounded-3xl my-5"/>
                            <img src={pp3} width={450} height={450} alt="eVTOL" className="rounded-3xl my-5"/>
                        </div>
                    </div>
                </div>
                <div className="h-20 w-full" />
            </div>
        </div>
    )
}

export default PickPlace