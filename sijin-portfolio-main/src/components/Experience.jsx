import { useState, React } from 'react';
import { Zoom, Fade } from 'react-awesome-reveal';
import dsc from '../media/DSC.png';
import scr from '../media/SCR.png';
import gotg from '../media/big.png';
import rfp from '../media/RFP.png';
import ca from '../media/Nordstrom.jpeg';
import caa from '../media/jcrew.jpeg';
import tcd from '../media/Licious.jpeg';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/esm/Card';
import Modal from 'react-bootstrap/Modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCss3Alt,
	faDocker,
	faHtml5,
	faJs,
	faReact,
	faBootstrap,
} from '@fortawesome/free-brands-svg-icons';

const Experience = ({ darkMode }) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div data-theme={darkMode ? 'dark' : 'light'}>
			<br></br>
			<Fade>
				<Container >
					<br></br>
					<h2 className="lead" align="center">
						<b>- Projects -</b>
					</h2>
					<br></br>
					<Zoom>
						<Row className='project'>
							<Col lg={4} sm={12}>
								<Card
									align="center"
									className="exp"
									data-theme={darkMode ? 'dark' : 'light'}
								>
									<br></br>
									<center>
										<div class="flip-card">
											<div class="flip-card-inner">
												<div className="flip-card-front">
													<Card.Img variant="top" src={tcd} />
													<Card.Body>
														<Card.Title align="center">
														Licious(Clone)
														</Card.Title>
														<Card.Text>
															<p align="center">
															LICIOUS is a huge e-commerce website which provides lot of fresh raw food items like Chicken, Beef, Mutton etc in a ready to cook format. 
															
															</p>
														</Card.Text>
													</Card.Body>
												</div>
											
											</div>
										</div>
									</center>
									<br></br>
									<div>
										<a
											href="https://licious-web-clone.netlify.app/"
											target="_blank"
											rel="noreferrer noopener"
										>
											<Button
												variant={
													darkMode
														? 'outline-light'
														: 'outline-dark'
												}
												className="sbtn"
											>
												View Project
											</Button>
										</a>
										<a
											href="https://github.com/sijinjb/firstone"
											target="_blank"
											rel="noreferrer noopener"
										>
											<Button
												variant={
													darkMode
														? 'outline-light'
														: 'outline-dark'
												}
												className="sbtn"
											>
												View Github Repo
											</Button>
										</a>
									</div>
									<br></br>
								</Card>
							</Col>
							{/* <Col lg={4} sm={12}>
								<Card
									align="center"
									className="exp"
									data-theme={darkMode ? 'dark' : 'light'}
								>
									<br></br>
									<center>
										<div class="flip-card">
											<div class="flip-card-inner">
												<div className="flip-card-front">
													<Card.Img variant="top" src={gotg} />
													<Card.Body>
														<Card.Title align="center">
															BigBasket.com(Clone)
														</Card.Title>
														<Card.Text>
															<p align="center">
																A Web Application where user can
																order ther Grocery products.
															</p>
														</Card.Text>
													</Card.Body>
												</div>
												<div className="flip-card-back">
													<p>
														This is an Grocery Ordering Web
														Application where the customers can
														login and go through all the items i.e
														vegetables,fruits,staples,cosmetic so
														on & then they can add the items
														according to their cart and pay for
														the above items via card or cash, the
														items get delivered. Thank You for
														ordering
													</p>
												</div>
											</div>
										</div>
									</center>
									<br></br>
									<div>
										<Modal
											show={show}
											onHide={handleClose}
											className="modal"
										>
											<Modal.Body>
												Heya! The project is in development mode,
												you can visit the repository and have a
												look. Feel free to contribute!
											</Modal.Body>
											<Modal.Footer>
												<Button
													variant="outline-dark"
													onClick={handleClose}
												>
													Close
												</Button>
												<a
													href="https://github.com/Tejaswi-Chaudhari/Gift-of-the-Gab"
													target="_blank"
													rel="noreferrer noopener"
												>
													<Button variant="outline-dark">
														View Github Repo
													</Button>
												</a>
											</Modal.Footer>
										</Modal>
										<Button
											variant={
												darkMode ? 'outline-light' : 'outline-dark'
											}
											onClick={handleShow}
											className="sbtn"
										>
											View Project
										</Button>
										<a
											href="https://github.com/Tejaswi-Chaudhari/Gift-of-the-Gab"
											target="_blank"
											rel="noreferrer noopener"
										>
											<Button
												variant={
													darkMode
														? 'outline-light'
														: 'outline-dark'
												}
												className="sbtn"
											>
												View Github Repo
											</Button>
										</a>
									</div>
									<br></br>
								</Card>
							</Col> */}
							<Col lg={4} sm={12}>
								<Card
									align="center"
									className="exp"
									data-theme={darkMode ? 'dark' : 'light'}
								>
									<br></br>
									<center>
										<div class="flip-card">
											<div class="flip-card-inner">
												<div className="flip-card-front">
													<Card.Img variant="top" src={ca} />
													<Card.Body>
														<Card.Title align="center">
														Nordstrom(Clone)
														</Card.Title>
														<Card.Text>
															<p align="center">
															NORDSTROM is a huge e-commerce website which sells lot of commercial products like clothes,jewellery etc . 
												
															</p>
														</Card.Text>
													</Card.Body>
												</div>
												
											</div>
										</div>
									</center>
									<br></br>
									<div>
										<a
											href="https://symphonious-naiad-a61d83.netlify.app/"
											target="_blank"
											rel="noreferrer noopener"
										>
											<Button
												variant={
													darkMode
														? 'outline-light'
														: 'outline-dark'
												}
												className="sbtn"
											>
												View Project
											</Button>
										</a>
										<a
											href="https://github.com/jaiomkul/Nordstrom.com"
											target="_blank"
											rel="noreferrer noopener"
										>
											<Button
												variant={
													darkMode
														? 'outline-light'
														: 'outline-dark'
												}
												className="sbtn"
											>
												View Github Repo
											</Button>
										</a>
									</div>
									<br></br>
								</Card>
							</Col>


							<Col lg={4} sm={12}>
								<Card
									align="center"
									className="exp"
									data-theme={darkMode ? 'dark' : 'light'}
								>
									<br></br>
									<center>
										<div class="flip-card">
											<div class="flip-card-inner">
												<div className="flip-card-front">
													<Card.Img variant="top" src={caa} />
													<Card.Body>
														<Card.Title align="center">
														JCrew(Clone)
														</Card.Title>
														<Card.Text>
															<p align="center">
														 The website offers an assortment of women's, men's, and children's apparel and accessories, lounge-wear, bags, sweaters, denim, jewelry, and shoes.
												
															</p>
														</Card.Text>
													</Card.Body>
												</div>
												
											</div>
										</div>
									</center>
									<br></br>
									<div>
										<a
											href="https://www.jcrew.com/in/"
											target="_blank"
											rel="noreferrer noopener"
										>
											<Button
												variant={
													darkMode
														? 'outline-light'
														: 'outline-dark'
												}
												className="sbtn"
											>
												View Project
											</Button>
										</a>
										<a
											href="https://github.com/sijinjb/j.crewfinal"
											target="_blank"
											rel="noreferrer noopener"
										>
											<Button
												variant={
													darkMode
														? 'outline-light'
														: 'outline-dark'
												}
												className="sbtn"
											>
												View Github Repo
											</Button>
										</a>
									</div>
									<br></br>
								</Card>
							</Col>
						</Row>
					</Zoom>
					<br></br>
					<Zoom>
						<Row>
							{/* <Col lg={4} sm={12}>
								<Card
									align="center"
									className="exp"
									data-theme={darkMode ? 'dark' : 'light'}
								>
									<br></br>
									<center>
										<div class="flip-card">
											<div class="flip-card-inner">
												<div className="flip-card-front">
													<Card.Img variant="top" src={rfp} />
													<Card.Body>
														<Card.Title align="center">
															Rooted - Portal for farmers
														</Card.Title>
														<Card.Text>
															<p align="center">
																Developed a Portal for Farmers
																to sell their goods at a better
																rate.
															</p>
														</Card.Text>
													</Card.Body>
												</div>
												<div className="flip-card-back">
													<p>
														User-friendly and clean basic scripted
														website
														<br></br>Tech Stack - HTML, CSS,
														JavaScript
													</p>
												</div>
											</div>
										</div>
									</center>
									<br></br>
									<div>
										<a
											href="https://rooted-portal.netlify.app/"
											target="_blank"
											rel="noreferrer noopener"
										>
											<Button
												variant={
													darkMode
														? 'outline-light'
														: 'outline-dark'
												}
												className="sbtn"
											>
												View Project
											</Button>
										</a>
										<a
											href="https://github.com/SheHacks-Hack-O-holics/SheHacks"
											target="_blank"
											rel="noreferrer noopener"
										>
											<Button
												variant={
													darkMode
														? 'outline-light'
														: 'outline-dark'
												}
												className="sbtn"
											>
												View Github Repo
											</Button>
										</a>
									</div>
									<br></br>
								</Card>
							</Col>
							<Col lg={4} sm={12}>
								<Card
									align="center"
									className="exp"
									data-theme={darkMode ? 'dark' : 'light'}
								>
									<br></br>
									<center>
										<div class="flip-card">
											<div class="flip-card-inner">
												<div className="flip-card-front">
													<Card.Img variant="top" src={dsc} />
													<Card.Body>
														<Card.Title align="center">
															Google Developer Student Clubs
														</Card.Title>
														<Card.Text>
															<p align="center">
																Worked as a core team member of
																GDSC UMIT
															</p>
														</Card.Text>
													</Card.Body>
												</div>
												<div className="flip-card-back">
													<p>
														Organized Study Jams, Hackathons and
														Webinars.
														<br></br>Hosted events of Google Cloud
														and Machine Learning.
														<br></br>Guided students in Google
														Cloud and Android Development Study
														Jams
													</p>
												</div>
											</div>
										</div>
									</center>
									<br></br>
									<div>
										<a
											href="https://dscumit.netlify.app/"
											target="_blank"
											rel="noreferrer noopener"
										>
											<Button
												variant={
													darkMode
														? 'outline-light'
														: 'outline-dark'
												}
												className="sbtn"
											>
												View Website
											</Button>
										</a>
										<a
											href="https://www.instagram.com/dsc__umit/"
											target="_blank"
											rel="noreferrer noopener"
										>
											<Button
												variant={
													darkMode
														? 'outline-light'
														: 'outline-dark'
												}
												className="sbtn"
											>
												Instagram Handle
											</Button>
										</a>
									</div>
									<br></br>
								</Card>
							</Col> */}
							{/* <Col lg={4} sm={12}>
								<Card
									align="center"
									className="exp"
									data-theme={darkMode ? 'dark' : 'light'}
								>
									<br></br>
									<center>
										<div class="flip-card">
											<div class="flip-card-inner">
												<div className="flip-card-front">
													<Card.Img variant="top" src={scr} />
													<Card.Body>
														<Card.Title align="center">
															Student Council
														</Card.Title>
														<Card.Text>
															<p align="center">
																Representative of Department of
																Computer Science and Technology,
																UMIT
															</p>
														</Card.Text>
													</Card.Body>
												</div>
												<div className="flip-card-back">
													<p>
														Managed and helped students in their
														curriculum and other difficulties.
														<br></br>Co-organized annual fest
														'Arcane Illusions'.
														<br></br>Coordinated between faculties
														and students about studies and other
														activities.
													</p>
												</div>
											</div>
										</div>
									</center>
									<br></br>
									<div>
										<a
											href="https://www.instagram.com/umit_sc/"
											target="_blank"
											rel="noreferrer noopener"
										>
											<Button
												variant={
													darkMode
														? 'outline-light'
														: 'outline-dark'
												}
												className="sbtn"
											>
												Instagram Handle
											</Button>
										</a>
									</div>
									<br></br>
								</Card>
							</Col> */}
						</Row>
					</Zoom>
				</Container>
			</Fade>
			<br></br>
			<hr></hr>
			<br></br>
		</div>
	);
};

export default Experience;
