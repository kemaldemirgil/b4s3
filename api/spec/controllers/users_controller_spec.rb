require 'rails_helper'

RSpec.describe UsersController, type: :request do
  describe 'GET /users' do
    it 'should get index' do
      get users_url, as: :json
      expect(response).to have_http_status(:success)
      expect(JSON.parse(response.body)).to be_empty # You can check the response body if needed
    end
  end

  describe 'POST /users' do
    let(:valid_attributes) do
      { user: { password: 'password', username: 'testuser' } }
    end

    it 'should create user' do
      expect do
        post users_url, params: valid_attributes, as: :json
      end.to change(User, :count).by(1)

      expect(response).to have_http_status(:created)
    end
  end

  describe 'GET /users/:id' do
    subject { get user_url(user), as: :json }

    let(:user) { create(:user) }

    it { is_expected.to have_json_response('username', 'test') }
    it { is_expected.to have_json_response('password', 'test123') }
  end

  describe 'PATCH /users/:id' do
    let(:valid_attributes) do
      { user: { password: 'new_password', username: 'new_username' } }
    end

    it 'should update user' do
      user = create(:user) # Assuming you have a FactoryBot factory for User

      patch user_url(user), params: valid_attributes, as: :json
      expect(response).to have_http_status(:success)

      # You can also check if the user's attributes have been updated as expected
      user.reload
      expect(user.password).to eq('new_password')
      expect(user.username).to eq('new_username')
    end
  end

  describe 'DELETE /users/:id' do
    it 'should destroy user' do
      user = create(:user) # Assuming you have a FactoryBot factory for User

      expect do
        delete user_url(user), as: :json
      end.to change(User, :count).by(-1)

      expect(response).to have_http_status(:no_content)
    end
  end
end
