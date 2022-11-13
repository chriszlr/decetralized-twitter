// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TwitterContract{

    event AddTweet(address recipient, uint tweetId);
    event DeleteTweet(uint tweetId, bool isDeleted);

    struct Tweet{
        uint id;
        address username;
        string tweetText;
        bool isDeleted;
    }

    Tweet[] private tweets;

    // mapping of tweet id to the wallet address of the user
    mapping(uint => address) tweetToOwner;

    // method to be called by our frontend when trying to add a new tweet
    function addTweet(string memory tweetText, bool isDeleted) external {
        uint tweetId = tweets.length;
        tweets.push(Tweet(tweetId, msg.sender, tweetText, isDeleted));
        tweetToOwner[tweetId] = msg.sender;
        emit AddTweet(msg.sender, tweetId);
    }

    // method to get all tweets
    function getAllTweets() external view returns(Tweet[] memory){
        Tweet[] memory temporary = new Tweet[](tweets.length);

        uint counter = 0;
        for(uint i = 0; i < tweets.length; i++){
            if(tweets[i].isDeleted == false){
                temporary[counter] = temporary[i];
                counter++;
            }
        }

        Tweet[] memory result = new Tweet[](counter);
        for(uint i = 0; i < counter; i++){
            result[i] = temporary[i];
        }

        return result;
    }

    // method to get only my tweets
    function getMyTweets() external view returns(Tweet[] memory){
        Tweet[] memory temporary = new Tweet[](tweets.length);

        uint counter = 0;
        for(uint i = 0; i < tweets.length; i++){
            if(tweetToOwner[i] == msg.sender && tweets[i].isDeleted == false){
                temporary[counter] = temporary[i];
                counter++;
            }
        }

        Tweet[] memory result = new Tweet[](counter);
        for(uint i = 0; i < counter; i++){
            result[i] = temporary[i];
        }

        return result;
    }

    // method to delete tweet
    function deleteTweet(uint tweetId, bool isDeleted) external{
        if(tweetToOwner[tweetId] == msg.sender){
            tweets[tweetId].isDeleted = isDeleted;
            emit DeleteTweet(tweetId, isDeleted);
        }
    }
}