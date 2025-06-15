import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import CloseIcon from '../../Assets/Images/close-btn.svg';
import ComapreProduct from '../../Assets/Images/compare-img.png';

export default function Compare() {
  useEffect(() => {
    const slider = document.querySelector('.compare_list_wrapper');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', e => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', e => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1;
      slider.scrollLeft = scrollLeft - walk;
    });
  }, []);

  return (
    <main>
      <section className="compare_wrapper pb100 pb80-lg pb50-md">
        <Container>
          <h2 className="text-center mb25 h3">Compare Table</h2>
          <div className="compare_inner_wrapper">
            <div className="comapre_title_box">
              <div className="compare_box">
                <h6>Grading</h6>
                <ul>
                  <li>Diamond Shape</li>
                  <li>Carat Size</li>
                  <li>Color</li>
                  <li>Clarity</li>
                  <li>Cut</li>
                  <li>Polish</li>
                </ul>
                <h6>Advanced</h6>
                <ul>
                  <li>Symmetry</li>
                  <li>Flourescence</li>
                  <li>Depth</li>
                  <li>Lab</li>
                  <li>Fancy</li>
                  <li>Girdle%</li>
                  <li>Crown</li>
                  <li>Pavillion</li>
                  <li>Culet</li>
                  <li>Shade</li>
                  <li>H&A</li>
                  <li>LowerHalve</li>
                  <li>Tinge</li>
                  <li>Milky</li>
                  <li>Eyeclean</li>
                  <li>Key To Symbol</li>
                  <li>Comment</li>
                </ul>
                <h6>Inclusion</h6>
                <ul>
                  <li>BIS</li>
                  <li>BIC</li>
                  <li>WIS</li>
                  <li>WIC</li>
                  <li>Inclusion</li>
                </ul>
              </div>
            </div>
            <div className="compare_list_wrapper">
              <div className="compare_box">
                <div className="compare_head">
                  <h5>#457321458</h5>
                  <img src={CloseIcon} alt="" />
                </div>
                <div className="compare_img">
                  <img src={ComapreProduct} alt="" />
                </div>
                <h6>
                  <span>Grading</span>
                </h6>
                <ul>
                  <li>
                    <span>Diamond Shape</span>Round
                  </li>
                  <li>
                    <span>Carat Size</span>0.00 - 17.15
                  </li>
                  <li>
                    <span>Color</span>D
                  </li>
                  <li>
                    <span>Clarity</span>FL
                  </li>
                  <li>
                    <span>Cut</span>Idea
                  </li>
                  <li>
                    <span>Polish</span>All
                  </li>
                </ul>
                <h6>
                  <span>Advanced</span>
                </h6>
                <ul>
                  <li>
                    <span>Symmetry</span>All
                  </li>
                  <li>
                    <span>Flourescence</span>BLU
                  </li>
                  <li>
                    <span>Depth</span>50
                  </li>
                  <li>
                    <span>Lab</span>100
                  </li>
                  <li>
                    <span>Fancy</span>IGI
                  </li>
                  <li>
                    <span>Girdle%</span>Pink
                  </li>
                  <li>
                    <span>Crown</span>0.00
                  </li>
                  <li>
                    <span>Pavillion</span>0.00
                  </li>
                  <li>
                    <span>Culet</span>0.00
                  </li>
                  <li>
                    <span>Shade</span>-
                  </li>
                  <li>
                    <span>H&A</span>Yellow
                  </li>
                  <li>
                    <span>LowerHalve</span>None
                  </li>
                  <li>
                    <span>Tinge</span>0.00
                  </li>
                  <li>
                    <span>Milky</span>-
                  </li>
                  <li>
                    <span>Eyeclean</span>N
                  </li>
                  <li>
                    <span>Key To Symbol</span>-
                  </li>
                  <li>
                    <span>Comment</span>-
                  </li>
                </ul>
                <h6>
                  <span>Inclusion</span>
                </h6>
                <ul>
                  <li>
                    <span>BIS</span>-
                  </li>
                  <li>
                    <span>BIC</span>-
                  </li>
                  <li>
                    <span>WIS</span>-
                  </li>
                  <li>
                    <span>WIC</span>-
                  </li>
                  <li>
                    <span>Inclusion</span>-
                  </li>
                </ul>
              </div>
              <div className="compare_box">
                <div className="compare_head">
                  <h5>#457321458</h5>
                  <img src={CloseIcon} alt="" />
                </div>
                <div className="compare_img">
                  <img src={ComapreProduct} alt="" />
                </div>
                <h6>
                  <span>Grading</span>
                </h6>
                <ul>
                  <li>
                    <span>Diamond Shape</span>Round
                  </li>
                  <li>
                    <span>Carat Size</span>0.00 - 17.15
                  </li>
                  <li>
                    <span>Color</span>D
                  </li>
                  <li>
                    <span>Clarity</span>FL
                  </li>
                  <li>
                    <span>Cut</span>Idea
                  </li>
                  <li>
                    <span>Polish</span>All
                  </li>
                </ul>
                <h6>
                  <span>Advanced</span>
                </h6>
                <ul>
                  <li>
                    <span>Symmetry</span>All
                  </li>
                  <li>
                    <span>Flourescence</span>BLU
                  </li>
                  <li>
                    <span>Depth</span>50
                  </li>
                  <li>
                    <span>Lab</span>100
                  </li>
                  <li>
                    <span>Fancy</span>IGI
                  </li>
                  <li>
                    <span>Girdle%</span>Pink
                  </li>
                  <li>
                    <span>Crown</span>0.00
                  </li>
                  <li>
                    <span>Pavillion</span>0.00
                  </li>
                  <li>
                    <span>Culet</span>0.00
                  </li>
                  <li>
                    <span>Shade</span>-
                  </li>
                  <li>
                    <span>H&A</span>Yellow
                  </li>
                  <li>
                    <span>LowerHalve</span>None
                  </li>
                  <li>
                    <span>Tinge</span>0.00
                  </li>
                  <li>
                    <span>Milky</span>-
                  </li>
                  <li>
                    <span>Eyeclean</span>N
                  </li>
                  <li>
                    <span>Key To Symbol</span>-
                  </li>
                  <li>
                    <span>Comment</span>-
                  </li>
                </ul>
                <h6>
                  <span>Inclusion</span>
                </h6>
                <ul>
                  <li>
                    <span>BIS</span>-
                  </li>
                  <li>
                    <span>BIC</span>-
                  </li>
                  <li>
                    <span>WIS</span>-
                  </li>
                  <li>
                    <span>WIC</span>-
                  </li>
                  <li>
                    <span>Inclusion</span>-
                  </li>
                </ul>
              </div>
              <div className="compare_box">
                <div className="compare_head">
                  <h5>#457321458</h5>
                  <img src={CloseIcon} alt="" />
                </div>
                <div className="compare_img">
                  <img src={ComapreProduct} alt="" />
                </div>
                <h6>
                  <span>Grading</span>
                </h6>
                <ul>
                  <li>
                    <span>Diamond Shape</span>Round
                  </li>
                  <li>
                    <span>Carat Size</span>0.00 - 17.15
                  </li>
                  <li>
                    <span>Color</span>D
                  </li>
                  <li>
                    <span>Clarity</span>FL
                  </li>
                  <li>
                    <span>Cut</span>Idea
                  </li>
                  <li>
                    <span>Polish</span>All
                  </li>
                </ul>
                <h6>
                  <span>Advanced</span>
                </h6>
                <ul>
                  <li>
                    <span>Symmetry</span>All
                  </li>
                  <li>
                    <span>Flourescence</span>BLU
                  </li>
                  <li>
                    <span>Depth</span>50
                  </li>
                  <li>
                    <span>Lab</span>100
                  </li>
                  <li>
                    <span>Fancy</span>IGI
                  </li>
                  <li>
                    <span>Girdle%</span>Pink
                  </li>
                  <li>
                    <span>Crown</span>0.00
                  </li>
                  <li>
                    <span>Pavillion</span>0.00
                  </li>
                  <li>
                    <span>Culet</span>0.00
                  </li>
                  <li>
                    <span>Shade</span>-
                  </li>
                  <li>
                    <span>H&A</span>Yellow
                  </li>
                  <li>
                    <span>LowerHalve</span>None
                  </li>
                  <li>
                    <span>Tinge</span>0.00
                  </li>
                  <li>
                    <span>Milky</span>-
                  </li>
                  <li>
                    <span>Eyeclean</span>N
                  </li>
                  <li>
                    <span>Key To Symbol</span>-
                  </li>
                  <li>
                    <span>Comment</span>-
                  </li>
                </ul>
                <h6>
                  <span>Inclusion</span>
                </h6>
                <ul>
                  <li>
                    <span>BIS</span>-
                  </li>
                  <li>
                    <span>BIC</span>-
                  </li>
                  <li>
                    <span>WIS</span>-
                  </li>
                  <li>
                    <span>WIC</span>-
                  </li>
                  <li>
                    <span>Inclusion</span>-
                  </li>
                </ul>
              </div>
              <div className="compare_box">
                <div className="compare_head">
                  <h5>#457321458</h5>
                  <img src={CloseIcon} alt="" />
                </div>
                <div className="compare_img">
                  <img src={ComapreProduct} alt="" />
                </div>
                <h6>
                  <span>Grading</span>
                </h6>
                <ul>
                  <li>
                    <span>Diamond Shape</span>Round
                  </li>
                  <li>
                    <span>Carat Size</span>0.00 - 17.15
                  </li>
                  <li>
                    <span>Color</span>D
                  </li>
                  <li>
                    <span>Clarity</span>FL
                  </li>
                  <li>
                    <span>Cut</span>Idea
                  </li>
                  <li>
                    <span>Polish</span>All
                  </li>
                </ul>
                <h6>
                  <span>Advanced</span>
                </h6>
                <ul>
                  <li>
                    <span>Symmetry</span>All
                  </li>
                  <li>
                    <span>Flourescence</span>BLU
                  </li>
                  <li>
                    <span>Depth</span>50
                  </li>
                  <li>
                    <span>Lab</span>100
                  </li>
                  <li>
                    <span>Fancy</span>IGI
                  </li>
                  <li>
                    <span>Girdle%</span>Pink
                  </li>
                  <li>
                    <span>Crown</span>0.00
                  </li>
                  <li>
                    <span>Pavillion</span>0.00
                  </li>
                  <li>
                    <span>Culet</span>0.00
                  </li>
                  <li>
                    <span>Shade</span>-
                  </li>
                  <li>
                    <span>H&A</span>Yellow
                  </li>
                  <li>
                    <span>LowerHalve</span>None
                  </li>
                  <li>
                    <span>Tinge</span>0.00
                  </li>
                  <li>
                    <span>Milky</span>-
                  </li>
                  <li>
                    <span>Eyeclean</span>N
                  </li>
                  <li>
                    <span>Key To Symbol</span>-
                  </li>
                  <li>
                    <span>Comment</span>-
                  </li>
                </ul>
                <h6>
                  <span>Inclusion</span>
                </h6>
                <ul>
                  <li>
                    <span>BIS</span>-
                  </li>
                  <li>
                    <span>BIC</span>-
                  </li>
                  <li>
                    <span>WIS</span>-
                  </li>
                  <li>
                    <span>WIC</span>-
                  </li>
                  <li>
                    <span>Inclusion</span>-
                  </li>
                </ul>
              </div>
              <div className="compare_box">
                <div className="compare_head">
                  <h5>#457321458</h5>
                  <img src={CloseIcon} alt="" />
                </div>
                <div className="compare_img">
                  <img src={ComapreProduct} alt="" />
                </div>
                <h6>
                  <span>Grading</span>
                </h6>
                <ul>
                  <li>
                    <span>Diamond Shape</span>Round
                  </li>
                  <li>
                    <span>Carat Size</span>0.00 - 17.15
                  </li>
                  <li>
                    <span>Color</span>D
                  </li>
                  <li>
                    <span>Clarity</span>FL
                  </li>
                  <li>
                    <span>Cut</span>Idea
                  </li>
                  <li>
                    <span>Polish</span>All
                  </li>
                </ul>
                <h6>
                  <span>Advanced</span>
                </h6>
                <ul>
                  <li>
                    <span>Symmetry</span>All
                  </li>
                  <li>
                    <span>Flourescence</span>BLU
                  </li>
                  <li>
                    <span>Depth</span>50
                  </li>
                  <li>
                    <span>Lab</span>100
                  </li>
                  <li>
                    <span>Fancy</span>IGI
                  </li>
                  <li>
                    <span>Girdle%</span>Pink
                  </li>
                  <li>
                    <span>Crown</span>0.00
                  </li>
                  <li>
                    <span>Pavillion</span>0.00
                  </li>
                  <li>
                    <span>Culet</span>0.00
                  </li>
                  <li>
                    <span>Shade</span>-
                  </li>
                  <li>
                    <span>H&A</span>Yellow
                  </li>
                  <li>
                    <span>LowerHalve</span>None
                  </li>
                  <li>
                    <span>Tinge</span>0.00
                  </li>
                  <li>
                    <span>Milky</span>-
                  </li>
                  <li>
                    <span>Eyeclean</span>N
                  </li>
                  <li>
                    <span>Key To Symbol</span>-
                  </li>
                  <li>
                    <span>Comment</span>-
                  </li>
                </ul>
                <h6>
                  <span>Inclusion</span>
                </h6>
                <ul>
                  <li>
                    <span>BIS</span>-
                  </li>
                  <li>
                    <span>BIC</span>-
                  </li>
                  <li>
                    <span>WIS</span>-
                  </li>
                  <li>
                    <span>WIC</span>-
                  </li>
                  <li>
                    <span>Inclusion</span>-
                  </li>
                </ul>
              </div>
              <div className="compare_box">
                <div className="compare_head">
                  <h5>#457321458</h5>
                  <img src={CloseIcon} alt="" />
                </div>
                <div className="compare_img">
                  <img src={ComapreProduct} alt="" />
                </div>
                <h6>
                  <span>Grading</span>
                </h6>
                <ul>
                  <li>
                    <span>Diamond Shape</span>Round
                  </li>
                  <li>
                    <span>Carat Size</span>0.00 - 17.15
                  </li>
                  <li>
                    <span>Color</span>D
                  </li>
                  <li>
                    <span>Clarity</span>FL
                  </li>
                  <li>
                    <span>Cut</span>Idea
                  </li>
                  <li>
                    <span>Polish</span>All
                  </li>
                </ul>
                <h6>
                  <span>Advanced</span>
                </h6>
                <ul>
                  <li>
                    <span>Symmetry</span>All
                  </li>
                  <li>
                    <span>Flourescence</span>BLU
                  </li>
                  <li>
                    <span>Depth</span>50
                  </li>
                  <li>
                    <span>Lab</span>100
                  </li>
                  <li>
                    <span>Fancy</span>IGI
                  </li>
                  <li>
                    <span>Girdle%</span>Pink
                  </li>
                  <li>
                    <span>Crown</span>0.00
                  </li>
                  <li>
                    <span>Pavillion</span>0.00
                  </li>
                  <li>
                    <span>Culet</span>0.00
                  </li>
                  <li>
                    <span>Shade</span>-
                  </li>
                  <li>
                    <span>H&A</span>Yellow
                  </li>
                  <li>
                    <span>LowerHalve</span>None
                  </li>
                  <li>
                    <span>Tinge</span>0.00
                  </li>
                  <li>
                    <span>Milky</span>-
                  </li>
                  <li>
                    <span>Eyeclean</span>N
                  </li>
                  <li>
                    <span>Key To Symbol</span>-
                  </li>
                  <li>
                    <span>Comment</span>-
                  </li>
                </ul>
                <h6>
                  <span>Inclusion</span>
                </h6>
                <ul>
                  <li>
                    <span>BIS</span>-
                  </li>
                  <li>
                    <span>BIC</span>-
                  </li>
                  <li>
                    <span>WIS</span>-
                  </li>
                  <li>
                    <span>WIC</span>-
                  </li>
                  <li>
                    <span>Inclusion</span>-
                  </li>
                </ul>
              </div>
              <div className="compare_box">
                <div className="compare_head">
                  <h5>#457321458</h5>
                  <img src={CloseIcon} alt="" />
                </div>
                <div className="compare_img">
                  <img src={ComapreProduct} alt="" />
                </div>
                <h6>
                  <span>Grading</span>
                </h6>
                <ul>
                  <li>
                    <span>Diamond Shape</span>Round
                  </li>
                  <li>
                    <span>Carat Size</span>0.00 - 17.15
                  </li>
                  <li>
                    <span>Color</span>D
                  </li>
                  <li>
                    <span>Clarity</span>FL
                  </li>
                  <li>
                    <span>Cut</span>Idea
                  </li>
                  <li>
                    <span>Polish</span>All
                  </li>
                </ul>
                <h6>
                  <span>Advanced</span>
                </h6>
                <ul>
                  <li>
                    <span>Symmetry</span>All
                  </li>
                  <li>
                    <span>Flourescence</span>BLU
                  </li>
                  <li>
                    <span>Depth</span>50
                  </li>
                  <li>
                    <span>Lab</span>100
                  </li>
                  <li>
                    <span>Fancy</span>IGI
                  </li>
                  <li>
                    <span>Girdle%</span>Pink
                  </li>
                  <li>
                    <span>Crown</span>0.00
                  </li>
                  <li>
                    <span>Pavillion</span>0.00
                  </li>
                  <li>
                    <span>Culet</span>0.00
                  </li>
                  <li>
                    <span>Shade</span>-
                  </li>
                  <li>
                    <span>H&A</span>Yellow
                  </li>
                  <li>
                    <span>LowerHalve</span>None
                  </li>
                  <li>
                    <span>Tinge</span>0.00
                  </li>
                  <li>
                    <span>Milky</span>-
                  </li>
                  <li>
                    <span>Eyeclean</span>N
                  </li>
                  <li>
                    <span>Key To Symbol</span>-
                  </li>
                  <li>
                    <span>Comment</span>-
                  </li>
                </ul>
                <h6>
                  <span>Inclusion</span>
                </h6>
                <ul>
                  <li>
                    <span>BIS</span>-
                  </li>
                  <li>
                    <span>BIC</span>-
                  </li>
                  <li>
                    <span>WIS</span>-
                  </li>
                  <li>
                    <span>WIC</span>-
                  </li>
                  <li>
                    <span>Inclusion</span>-
                  </li>
                </ul>
              </div>
              <div className="compare_box">
                <div className="compare_head">
                  <h5>#457321458</h5>
                  <img src={CloseIcon} alt="" />
                </div>
                <div className="compare_img">
                  <img src={ComapreProduct} alt="" />
                </div>
                <h6>
                  <span>Grading</span>
                </h6>
                <ul>
                  <li>
                    <span>Diamond Shape</span>Round
                  </li>
                  <li>
                    <span>Carat Size</span>0.00 - 17.15
                  </li>
                  <li>
                    <span>Color</span>D
                  </li>
                  <li>
                    <span>Clarity</span>FL
                  </li>
                  <li>
                    <span>Cut</span>Idea
                  </li>
                  <li>
                    <span>Polish</span>All
                  </li>
                </ul>
                <h6>
                  <span>Advanced</span>
                </h6>
                <ul>
                  <li>
                    <span>Symmetry</span>All
                  </li>
                  <li>
                    <span>Flourescence</span>BLU
                  </li>
                  <li>
                    <span>Depth</span>50
                  </li>
                  <li>
                    <span>Lab</span>100
                  </li>
                  <li>
                    <span>Fancy</span>IGI
                  </li>
                  <li>
                    <span>Girdle%</span>Pink
                  </li>
                  <li>
                    <span>Crown</span>0.00
                  </li>
                  <li>
                    <span>Pavillion</span>0.00
                  </li>
                  <li>
                    <span>Culet</span>0.00
                  </li>
                  <li>
                    <span>Shade</span>-
                  </li>
                  <li>
                    <span>H&A</span>Yellow
                  </li>
                  <li>
                    <span>LowerHalve</span>None
                  </li>
                  <li>
                    <span>Tinge</span>0.00
                  </li>
                  <li>
                    <span>Milky</span>-
                  </li>
                  <li>
                    <span>Eyeclean</span>N
                  </li>
                  <li>
                    <span>Key To Symbol</span>-
                  </li>
                  <li>
                    <span>Comment</span>-
                  </li>
                </ul>
                <h6>
                  <span>Inclusion</span>
                </h6>
                <ul>
                  <li>
                    <span>BIS</span>-
                  </li>
                  <li>
                    <span>BIC</span>-
                  </li>
                  <li>
                    <span>WIS</span>-
                  </li>
                  <li>
                    <span>WIC</span>-
                  </li>
                  <li>
                    <span>Inclusion</span>-
                  </li>
                </ul>
              </div>
              <div className="compare_box">
                <div className="compare_head">
                  <h5>#457321458</h5>
                  <img src={CloseIcon} alt="" />
                </div>
                <div className="compare_img">
                  <img src={ComapreProduct} alt="" />
                </div>
                <h6>
                  <span>Grading</span>
                </h6>
                <ul>
                  <li>
                    <span>Diamond Shape</span>Round
                  </li>
                  <li>
                    <span>Carat Size</span>0.00 - 17.15
                  </li>
                  <li>
                    <span>Color</span>D
                  </li>
                  <li>
                    <span>Clarity</span>FL
                  </li>
                  <li>
                    <span>Cut</span>Idea
                  </li>
                  <li>
                    <span>Polish</span>All
                  </li>
                </ul>
                <h6>
                  <span>Advanced</span>
                </h6>
                <ul>
                  <li>
                    <span>Symmetry</span>All
                  </li>
                  <li>
                    <span>Flourescence</span>BLU
                  </li>
                  <li>
                    <span>Depth</span>50
                  </li>
                  <li>
                    <span>Lab</span>100
                  </li>
                  <li>
                    <span>Fancy</span>IGI
                  </li>
                  <li>
                    <span>Girdle%</span>Pink
                  </li>
                  <li>
                    <span>Crown</span>0.00
                  </li>
                  <li>
                    <span>Pavillion</span>0.00
                  </li>
                  <li>
                    <span>Culet</span>0.00
                  </li>
                  <li>
                    <span>Shade</span>-
                  </li>
                  <li>
                    <span>H&A</span>Yellow
                  </li>
                  <li>
                    <span>LowerHalve</span>None
                  </li>
                  <li>
                    <span>Tinge</span>0.00
                  </li>
                  <li>
                    <span>Milky</span>-
                  </li>
                  <li>
                    <span>Eyeclean</span>N
                  </li>
                  <li>
                    <span>Key To Symbol</span>-
                  </li>
                  <li>
                    <span>Comment</span>-
                  </li>
                </ul>
                <h6>
                  <span>Inclusion</span>
                </h6>
                <ul>
                  <li>
                    <span>BIS</span>-
                  </li>
                  <li>
                    <span>BIC</span>-
                  </li>
                  <li>
                    <span>WIS</span>-
                  </li>
                  <li>
                    <span>WIC</span>-
                  </li>
                  <li>
                    <span>Inclusion</span>-
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
