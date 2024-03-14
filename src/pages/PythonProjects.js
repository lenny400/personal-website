import React from "react"

export default function PythonProjects() {

    return (
        <div>
            {/* Page content */}
            <div class="description">
                <h2><a href="https://github.com/lenny400/sentiment-analysis" target="_blank" rel="noreferrer">Performing Sentiment Analysis Using Amazon Product Review Data</a></h2>
                <p>This was an assignment for my Intro to Machine Learning class. The objectives of this assignment were to:</p>
                <ul>
                    <li>Use Pandas dataframes to do feature engineering.</li>
                    <li>Train a logistic regression model to predict the sentiment of product reviews.</li>
                    <li>Inspect the weights (coefficients) of a trained logistic regression model.</li>
                    <li>Make a prediction (both class and probability) of sentiment for a new product review.</li>
                    <li>Given a classifier, create a confusion matrix.</li>
                    <li>Compare multiple logistic regression models.</li>
                </ul>
            </div>
        </div>
    )
}