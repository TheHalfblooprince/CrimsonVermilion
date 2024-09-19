import uvicorn
from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import pandas as pd
from sklearn.metrics import r2_score

# Define a Pydantic model for the input data
class StockData(BaseModel):
    Open_stock: float
    High_stock: float
    Low_stock: float
    Volume_stock: int
    Year: int
    Month: int
    Day: int

# Load the trained model
with open("predict_talha.pkl", "rb") as model_file:
    model = pickle.load(model_file)

# Create the FastAPI app
app = FastAPI()

# Define the prediction endpoint
@app.post("/predict")
def predict_stock_data(data: StockData):
    try:
        # Create a DataFrame from the input data
        input_data = pd.DataFrame([data.dict()])

        # Make predictions using the trained model
        predictions = model.predict(input_data)

        # Return the prediction as a dictionary
        return {"prediction": predictions[0]}

    except Exception as e:
        return {"error": str(e)}

# Define a root endpoint
@app.get("/")
def root():
    return {"message": "Stock Price Prediction API"}

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)