
import './ProfilePage.css'

const ProfilePage = () => {
    return (
        <>
            <section class="section about-section gray-bg" id="about">
                <div class="container">
                    <div class="row align-items-center flex-row-reverse">
                        <div class="col-lg-6">
                            <div class="about-text go-to">
                                <h3 class="dark-color">About Me</h3>

                                <div class="row about-list">
                                    <div class="col-md-6">
                                        <div class="media">
                                            <label>Name</label>
                                            <p>Bola Uche</p>
                                        </div>
                                        <div class="media">
                                            <label>Age</label>
                                            <p>22 Yr</p>
                                        </div>
                                        <div class="media">
                                            <label>Voter-id</label>
                                            <p>220583</p>
                                        </div>
                                        <div class="media">
                                            <label>Address</label>
                                            <p>ogbmosho, Nigeria</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="media">
                                            <label>D O F</label>
                                            <p>02-05-2005</p>
                                        </div>
                                        <div class="media">
                                            <label>Phone</label>
                                            <p>820-885-3321</p>
                                        </div>
                                        <div class="media">
                                            <label>Candidate</label>
                                            <p>Peter Obi</p>
                                        </div>
                                        <div class="media">
                                            <label>Party</label>
                                            <p>Labour Party</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="about-avatar">
                                <img
                                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                    title
                                    alt
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default ProfilePage
