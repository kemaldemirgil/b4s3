# Matchers to test the api
module ApiMatchers
  # This matcher checks the response body with the provided field and message
  #
  # @params [string] field   response body field
  # @params [string] text    text to compare the field
  RSpec::Matchers.define :have_json_response do |field, text|
    match do
      response_body = JSON.parse(response.body)

      expect(response_body[field]).to eq(text)
    end

    failure_message do
      "Expected response #{field} field to have text #{text}"
    end
  end
end