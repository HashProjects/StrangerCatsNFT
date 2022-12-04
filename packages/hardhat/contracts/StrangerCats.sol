// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;  //Do not change the solidity version as it negativly impacts submission grading

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract StrangerCats is
    ERC721,
    ERC721Enumerable,
    ERC721URIStorage,
    Ownable
{
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    uint levelUpFee = 0.001 ether;

    constructor() ERC721("StrangerCats", "STCT") {}

    struct CatAttributes {
        string status;
        uint32 level;
    }

    event CatAttributeEvent(uint tokenId);

    mapping (uint => CatAttributes) public catAttributes;

    function getLevel(uint tokenId) public view returns (uint) {
        return catAttributes[tokenId].level;
    }

    function getStatus(uint tokenId) public view returns (string memory) {
        return catAttributes[tokenId].status;
    }

    modifier aboveLevel(uint _level, uint tokenId) {
        require(catAttributes[tokenId].level >= _level);
        _;
    }

    modifier onlyOwnerOf(uint _tokenId) {
        require(msg.sender == ownerOf(_tokenId));
        _;
    }

    function setLevelUpFee(uint _fee) external onlyOwner {
        levelUpFee = _fee;
    }

    function levelUp(uint _tokenId) external {
        require(catAttributes[_tokenId].level < 9);
        catAttributes[_tokenId].level = catAttributes[_tokenId].level + 1;
    }

    function changeStatus(uint _tokenId, string memory _newStatus) external aboveLevel(2, _tokenId) onlyOwnerOf(_tokenId) {
        catAttributes[_tokenId].status = _newStatus;
    }

    function _baseURI() internal pure override returns (string memory) {
        return "https://ipfs.io/ipfs/";
    }

    function _setStatusAndLevel(uint tokenId, string memory status, uint32 level) private {
        catAttributes[tokenId] = CatAttributes(status, level);
    }

    function mintItem(address to, string memory uri) public returns (uint256) {
        _tokenIdCounter.increment();
        uint256 tokenId = _tokenIdCounter.current();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        _setStatusAndLevel(tokenId, "Happy!", 1);
        return tokenId;
    }

    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    function burn(uint256 tokenId) public onlyOwnerOf(tokenId) {
        _burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
