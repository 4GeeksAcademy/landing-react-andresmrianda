import React from "react"
import PropTypes from "prop-types"

export const Jumbotron = (prop) => {
    return (
    <div class="jumbotron bg-light mt-3 pb-3">
        <h1 class="display-4">{prop.title}</h1>
        <p class="lead">{prop.description}</p>
        <p class="lead">
            <a class="btn btn-primary btn-lg" href={prop.buttonUrl} role="button">{prop.buttonLabel}</a>
        </p>
    </div>)
}

Jumbotron.defaultProps = {
    title: "Hello!",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae congue tortor. Praesent aliquam elit ligula, maximus consectetur odio tempor feugiat. Aenean auctor cursus convallis. Vestibulum rutrum eget nulla quis consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin maximus ipsum eu tortor ullamcorper porttitor. Vestibulum sed placerat ante. Cras suscipit fermentum leo ac sodales. Praesent semper eu mi efficitur volutpat. In sed porta tellus. Donec et urna bibendum, posuere nunc suscipit, laoreet nisl. Mauris luctus convallis magna sit amet aliquet.t",
    buttonUrl: "www.4geeks.com",
    buttonLabel: "Call to Action!"
}

Jumbotron.propTypes = {
    title:PropTypes.string,
    description:PropTypes.string,
    buttonUrl:PropTypes.string,
    buttonLabel:PropTypes.string,
}