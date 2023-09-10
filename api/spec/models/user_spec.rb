require 'rails_helper'

describe User do
  describe 'Creating a user includes all fields' do
    subject(:user) { create(:user) }

    it { expect(user.username).to be == 'test' }
    it { expect(user.password).to be == 'test123' }
  end
end
