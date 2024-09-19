import pandas as pd
import pickle

# Load the trained model from the pickle file
with open('predict.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

def prepare_input_data(day_input, month, year, open_price, high_price, low_price, volume,
                       ma5, ma10, ma20, rsi, macd, signal_line, sma, ema):
    # Prepare input data in the same format as used for training
    input_data = {
        'Open': open_price,
        'High': high_price,
        'Low': low_price,
        'Volume': volume,
        'MA5': ma5,
        'MA10': ma10,
        'MA20': ma20,
        'RSI': rsi,
        'MACD': macd,
        'Signal_Line': signal_line,
        'SMA': sma,
        'EMA': ema,
        'Day': int(day_input),  # Convert to integer if needed
        'Month': int(month),    # Convert to integer if needed
        'Year': int(year)       # Convert to integer if needed
    }

    return pd.DataFrame([input_data])  # Return input data as DataFrame

# Example usage:
day_input = '17'        # Example day input
month = '1'             # Example month input
year = '2021'           # Example year input
open_input = 130.45     # Example open price input
high_input = 135.00     # Example high price input
low_input = 125.00      # Example low price input
volume_input = 100000   # Example volume input
ma5_input = 128.60      # Example MA5 input
ma10_input = 127.80     # Example MA10 input
ma20_input = 126.90     # Example MA20 input
rsi_input = 60.0        # Example RSI input
macd_input = 2.5        # Example MACD input
signal_line_input = 2.2 # Example Signal Line input
sma_input = 130.00      # Example SMA input
ema_input = 129.70      # Example EMA input

# Prepare input data
input_df = prepare_input_data(day_input, month, year, open_input, high_input, low_input, volume_input,
                              ma5_input, ma10_input, ma20_input, rsi_input, macd_input, signal_line_input,
                              sma_input, ema_input)

# Make predictions using the loaded model
# Ensure the input_df contains all the required attributes for prediction
predicted_adj_close = model.predict(input_df[['Open', 'High', 'Low', 'Volume', 'MA5', 'MA10', 'MA20',
                                              'RSI', 'MACD', 'Signal_Line', 'SMA', 'EMA', 'Year', 'Month', 'Day']])

# Print the predicted adjusted close price
print("Predicted Adjusted Close Price:", predicted_adj_close[0])
